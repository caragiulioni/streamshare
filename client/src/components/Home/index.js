import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Logo from "./Logo";
import HomeActions from "./HomeActions";
import Spinner from "../Spinner";
const Home = () => {
  const status = useSelector((state) => state.user.status);
  // useEffect(() => {}, []);
  return status === "loading" ? (
    <Wrapper>
      <Spinner />
    </Wrapper>
  ) : (
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
