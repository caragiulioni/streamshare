import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GridItem = ({ item }) => {
  return (
    <Link to={`/sh/${item.username}`}>
      <Item>
        <Img
          style={{
            backgroundImage: `url(${item.avatar})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        ></Img>
        <h4>{item.username}</h4>
      </Item>
    </Link>
  );
};

export default GridItem;

const Item = styled.div`
  padding: 5px;
  text-align: center;

  h4 {
    font-size: 0.9em;
    margin: 5px 0px;
  }
  @media (min-width: 500px) {
    font-size: 1.3em;
  }
`;

const Img = styled.div`
  border-radius: 3px;
  width: 75px;
  height: 75px;
  @media (min-width: 500px) {
    width: 160px;
    height: 160px;
  }
`;
