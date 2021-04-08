import React from "react";
import styled from "styled-components";
const Wrapper = () => {
  return <Wrap>Hey Buddy</Wrap>;
};

export default Wrapper;

const Wrap = styled.main`
  background-color: white;
  margin: 10px 10px;

  @media screen and (min-width: 1080px) {
    margin: 25px;
  }
  @media screen and (min-width: 700px) {
    margin: 15px 15px;
  }
`;
