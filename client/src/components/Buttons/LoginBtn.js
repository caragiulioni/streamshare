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
  width: 80px;
  background-color: transparent;
  border: 2px solid var(--blue);
  width: 100px;
  color: var(--blue);
  font-weight: bold;
  margin: 5px 0px;
  text-transform: uppercase;
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
