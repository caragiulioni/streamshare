import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Title from "../Title";
import "../../Global/masonry.css";
import SortComponent from "../Buttons/SortComponent";
import styled from "styled-components";
const ProfileTitles = ({ memberData }) => {
  const memberTitles = memberData.userTitles.titles;
  const [titles, setTitles] = useState(memberTitles);
  const [original, setOriginal] = useState(titles);
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
