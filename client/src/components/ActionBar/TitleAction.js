import React from "react";
import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import { RiPlayListAddLine } from "react-icons/ri";

const TitleAction = ({ action, text, type }) => {
  return (
    <Wrapper onClick={action}>
      {type === "remove" ? <FiTrash2 /> : <RiPlayListAddLine />}
      {text}
    </Wrapper>
  );
};

export default TitleAction;

const Wrapper = styled.button`
  font-weight: bold;
  border: 2px solid var(--blue);
  margin: 0px;
  color: var(--blue);
  background-color: transparent;
  svg {
    margin-bottom: -2px;
    margin-right: 3px;
  }
  @media (min-width: 500px) {
    margin: 0px 8px;
  }
`;
