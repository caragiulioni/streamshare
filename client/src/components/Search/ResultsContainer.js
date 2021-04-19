import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import Title from "../Title";
import "../../Global/masonry.css";
const ResultsContainer = ({ results }) => {
  const breakpointColumnsObj = {
    default: 5,
    1280: 5,
    1080: 3,
    700: 2,
  };
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
