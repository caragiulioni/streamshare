import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import Title from "../Title";
import "./masonry.css";
const ResultsContainer = ({ results }) => {
  const breakpointColumnsObj = {
    1280: 4,
    1080: 2,
    700: 1,
  };
  console.log("RESULTS CONTAINER", results);
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {results.map((result) => (
        <Title key={result.imdbID} result={result} />
      ))}
    </Masonry>
  );
};

export default ResultsContainer;

const Wrapper = styled.div``;

const GridItem = styled.div``;
