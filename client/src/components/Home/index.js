import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Logo from "./Logo";
import HomeActions from "./HomeActions";
const Home = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <Logo />
      <HomeActions />
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
