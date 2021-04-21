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
        <h3>{item.username}</h3>
      </Item>
    </Link>
  );
};

export default GridItem;

const Item = styled.div`
  text-align: center;
`;

const Img = styled.div`
  width: 160px;
  height: 160px;
  @media (min-width: 500px) {
    width: 75px;
    height: 75px;
  }
`;
