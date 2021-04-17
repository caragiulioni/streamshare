import React from "react";
import styled from "styled-components";
import "./spinnerStyles.css";
const Spinner = () => {
  return <Spin></Spin>;
};

export default Spinner;

const Spin = styled.div`
  height: 60px;
  width: 60px;
  right: 0;
  left: 0;
  top: 50%;
  margin: auto;
  position: absolute;
  -webkit-animation: rotation 1s infinite linear;
  -moz-animation: rotation 1s infinite linear;
  -o-animation: rotation 1s infinite linear;
  animation: rotation 1s infinite linear;
  border: 6px solid lightgrey;
  border-radius: 100%;
  ::before {
    content: "";
    display: block;
    position: absolute;
    left: -6px;
    top: -6px;
    height: 100%;
    width: 100%;
    border-top: 6px solid cyan;
    border-left: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid transparent;
    border-radius: 100%;
  }
`;
