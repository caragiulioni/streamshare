import React from "react";
import styled from "styled-components";
const LoginBtn = ({ action, text }) => {
  return <Wrapper onClick={action}>{text}</Wrapper>;
};

export default LoginBtn;

const Wrapper = styled.button`
  margin: 3px auto;
  width: 75px;
  height: 20px;
  background-color: var(--orange);
  border-radius: 5px;
  color: var(--offwhite);
  font-weight: bold;
  font-size: 0.9em;
  border: 2px solid var(--grey);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(1.05);
  }
`;
