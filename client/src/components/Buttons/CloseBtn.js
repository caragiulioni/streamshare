import React from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";

const CloseBtn = ({ action }) => {
  return (
    <Wrapper onClick={action}>
      <FiX />
    </Wrapper>
  );
};

export default CloseBtn;

const Wrapper = styled.button``;
