import React from "react";
import styled from "styled-components";
const LoginBtn = ({ action, text, disabled }) => {
  return (
    <Wrapper onClick={action} disabled={disabled}>
      {text}
    </Wrapper>
  );
};

export default LoginBtn;

const Wrapper = styled.button`
  margin: 5px auto;
  padding: 10px;
  width: 80px;
  background-color: var(--orange);
  border-radius: 5px;
  color: var(--offwhite);
  font-weight: bold;
  font-size: 1em;
  border: 2px solid var(--grey);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.4;
  }
  @media (min-width: 700px) {
    padding: 4px;
    width: 70px;
    font-size: 1em;
  }
`;
