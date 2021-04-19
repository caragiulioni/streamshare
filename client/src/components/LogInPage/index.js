import React from "react";
import styled from "styled-components";
import Login from "../LogIn";

const LogInPage = () => {
  return (
    <LoginWrapper>
      <Inner>
        <h2>Welcome to Streamshare!</h2>
        <p>Let's get started.</p>
        <Login />
      </Inner>
    </LoginWrapper>
  );
};

export default LogInPage;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 500px;
`;

const Inner = styled.div`
  flex-direction: column;
  display: flex;
  align-self: center;
  text-align: center;
`;
