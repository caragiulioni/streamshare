import React from "react";
import Masonry from "react-masonry-css";
import "../../Global/masonry.css";
import styled from "styled-components";
import GridItem from "./GridItem";
const Grid = ({ follows }) => {
  const breakpointColumnsObj = {
    default: 6,
    1280: 6,
    1080: 4,
  };
  return (
    <Wrapper>
      {follows.map((item) => (
        <GridItem item={item} key={item._id} />
      ))}
    </Wrapper>
  );
};

export default Grid;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
