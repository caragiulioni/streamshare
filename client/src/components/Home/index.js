import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import HomeActions from "./HomeActions";
import Details from "./Details";
const Home = () => {
  return (
    <Wrapper>
      <Logo />
      <HomeActions />
      <Details />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
