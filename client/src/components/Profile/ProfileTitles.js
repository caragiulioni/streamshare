import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Title from "../Title";
import "../../Global/masonry.css";
import SortComponent from "../Buttons/SortComponent";
import styled from "styled-components";
import FilterBar from "../FilterBar";
const ProfileTitles = ({ memberData }) => {
  const memberTitles = memberData.userTitles.titles;
  const render = [...memberTitles].reverse();
  const [titles, setTitles] = useState(render);
  const [original, setOriginal] = useState(render);
  const [value, setValue] = useState("");
  const breakpointColumnsObj = {
    default: 5,
    1280: 5,
    1080: 3,
    700: 2,
  };
  return (
    <div>
      {!titles.length ? (
        <Heading>
          <h4>{memberData.username} doesn't have any titles yet.</h4>
        </Heading>
      ) : (
        <>
          <Actions>
            <FilterBar value={value} setValue={setValue} />
            <SortComponent
              titles={titles}
              setTitles={setTitles}
              original={original}
              setOriginal={setOriginal}
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
        </>
      )}
    </div>
  );
};

export default ProfileTitles;

const Heading = styled.div`
  h4 {
    color: var(--orange);
    text-align: center;
    font-size: 1.3em;
    margin: 25px;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;
