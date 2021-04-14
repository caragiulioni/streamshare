import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Logo from "./Logo";
import HomeActions from "./HomeActions";
const Home = () => {
  const status = useSelector((state) => state.user.status);
  console.log("HOME STATUS", status);
  useEffect(() => {}, []);
  return status === "loading" ? (
    <div>LOADING</div>
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
