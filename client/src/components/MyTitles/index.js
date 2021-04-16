import React, { useEffect, useState, useParams } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { SectionContainer } from "../../Global/sectionStyles";
import TitlesWelcome from "./TitlesWelcome";
import Masonry from "react-masonry-css";
import Title from "../Title";
import "../../Global/masonry.css";
import Spinner from "../Spinner";

const MyTitles = () => {
  const currentUser = useSelector((state) => state.user.currentUser.user);
  const [titles, setTitles] = useState(null);
  const [response, setResponse] = useState(null);
  const userId = currentUser._id;
  useEffect(() => {
    setResponse("loading");
    if (currentUser) {
      fetch(`/titles/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data.titles);
          if (!data.data.titles.length) {
            setResponse(false);
          } else {
            setTitles(data.data.titles);
            setResponse(true);
          }
        });
    }
  }, [currentUser, setResponse]);

  const breakpointColumnsObj = {
    default: 5,
    1280: 5,
    1080: 3,
    700: 2,
  };

  console.log(response);
  return (
    <div>
      {response === "loading" && <Spinner />}
      {currentUser && response === true && (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {titles.map((result) => (
            <Title key={result.imdbID} result={result} />
          ))}
        </Masonry>
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
