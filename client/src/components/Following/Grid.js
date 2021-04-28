import React from "react";
import "../../Global/masonry.css";
import styled from "styled-components";
import GridItem from "./GridItem";
const Grid = ({ follows }) => {
  return (
    <Wrapper>
      <h3>FOLLOWING</h3>
      <GridWrapper>
        {follows.map((item) => (
          <GridItem item={item} key={item._id} />
        ))}
      </GridWrapper>
    </Wrapper>
  );
};

export default Grid;

const Wrapper = styled.div`
  h3 {
    text-align: center;
    margin: 30px 0px 20px 0px;
    font-size: 1.5em;
    color: var(--blue);
    font-weight: bold;
  }
`;
const GridWrapper = styled.div`
  padding: 5px 0px;
  background-color: var(--cleargrey);
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 500px) {
    padding: 20px;
    width: 75%;
  }
`;
