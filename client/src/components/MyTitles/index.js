import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SectionContainer } from "../../Global/sectionStyles";
import TitlesWelcome from "./TitlesWelcome";
import Masonry from "react-masonry-css";
import Title from "../Title";
import "../../Global/masonry.css";
import Spinner from "../Spinner";
import SortComponent from "../Buttons/SortComponent";

const MyTitles = () => {
  const currentUser = useSelector((state) => state.user.currentUser.user);
  const [titles, setTitles] = useState(null);
  const [original, setOriginal] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setResponse("loading");
    if (currentUser._id) {
      fetch(`/titles/${currentUser._id}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.data.titles.length) {
            setResponse(false);
          } else {
            setTitles(data.data.titles);
            setOriginal(data.data.titles);
            setResponse(true);
          }
        });
    }
  }, [currentUser, setResponse, setTitles]);

  const breakpointColumnsObj = {
    default: 5,
    1280: 5,
    1080: 3,
    700: 2,
  };
  return (
    <div>
      {response === "loading" && <Spinner />}
      {currentUser && response === true && (
        <div>
          <SortComponent
            titles={titles}
            setTitles={setTitles}
            original={original}
          />
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {titles.map((result) => (
              <Title key={result.imdbID} result={result} />
            ))}
          </Masonry>
        </div>
      )}

      {currentUser && response === false && (
        <SectionContainer>
          <TitlesWelcome currentUser={currentUser} />
        </SectionContainer>
      )}
    </div>
  );
};

export default MyTitles;
