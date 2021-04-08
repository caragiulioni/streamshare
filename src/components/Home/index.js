import React from "react";
import styled from "styled-components";
import { FiHome } from "react-icons/fi";
const Home = () => {
  return (
    <Wrapper>
      <h2>Home</h2>
      <FiHome />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  background-color: yellow;
`;
