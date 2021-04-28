import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SectionContainer } from "../../Global/sectionStyles";
import TitlesWelcome from "./TitlesWelcome";
import Masonry from "react-masonry-css";
import Title from "../Title";
import "../../Global/masonry.css";
import Spinner from "../Spinner";
import SortComponent from "../Buttons/SortComponent";
import FilterBar from "../FilterBar";
import styled from "styled-components";

const MyTitles = () => {
  const currentUser = useSelector((state) => state.user.currentUser.user);
  const [titles, setTitles] = useState(null);
  const [original, setOriginal] = useState(null);
  const [response, setResponse] = useState(null);
  const [value, setValue] = useState("");
  useEffect(() => {
    setResponse("loading");
    if (currentUser._id) {
      fetch(`/api/titles/${currentUser._id}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.data.titles.length) {
            setResponse(false);
          } else {
            const render = [...data.data.titles].reverse();
            setTitles(render);
            setOriginal(render);
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
          <Actions>
            <FilterBar value={value} setValue={setValue} />
            <SortComponent
              titles={titles}
              setTitles={setTitles}
              original={original}
            />
          </Actions>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {titles
              .filter((result) => {
                if (!value) return true;
                if (result.Genre.toLowerCase().includes(value.toLowerCase())) {
                  return true;
                }
                return false;
              })
              .map((result) => (
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

const Actions = styled.div`
  margin: 10px 0px;
  display: block;
  align-items: center;
  @media (min-width: 1024px) {
    display: flex;
  }
`;
