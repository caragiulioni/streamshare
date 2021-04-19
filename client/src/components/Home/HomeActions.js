import React from "react";
import styled from "styled-components";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
const HomeActions = () => {
  return (
    <ActionsWrap>
      <LogIn />
      <SignUp />
    </ActionsWrap>
  );
};

export default HomeActions;

const ActionsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
