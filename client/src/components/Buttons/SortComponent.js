import React, { useState } from "react";
import styled from "styled-components";
const SortComponent = ({ titles, setTitles, original }) => {
  const [active, setActive] = useState();
  const orange = "#E9613F";
  const blue = "#6697CB";
  //simulate navlink behavior on button click

  const descend = () => {
    setActive("descend");
    const arr = [...titles].sort((a, b) => a.Title.localeCompare(b.Title));
    return setTitles(arr);
  };

  const ascend = () => {
    setActive("ascend");
    const arr = [...titles].sort((a, b) => b.Title.localeCompare(a.Title));
    return setTitles(arr);
  };

  const lastToFirst = () => {
    setActive("last");
    const arr = [...titles].reverse();
    return setTitles(arr);
  };

  const revert = (prev, id) => {
    setActive("revert");
    setTitles(original);
  };
  return (
    <Wrapper>
      <button
        style={{ color: active === "descend" ? orange : blue }}
        onClick={descend}
      >
        Z-A
      </button>
      <button
        style={{ color: active === "ascend" ? orange : blue }}
        onClick={ascend}
      >
        A-Z
      </button>
      <button
        style={{ color: active === "last" ? orange : blue }}
        onClick={lastToFirst}
      >
        last to first
      </button>
      <button
        style={{ color: active === "revert" ? orange : blue }}
        onClick={revert}
      >
        first to last
      </button>
    </Wrapper>
  );
};

export default SortComponent;

const Wrapper = styled.div`
  margin: 15px 0px;
  margin-left: 5px;
  button {
    font-size: 1em;
    cursor: pointer;
    background-color: transparent;
    border: none;
    /* color: var(--blue); */
    transition: 0.3s ease-in-out;
  }

  button:hover {
    color: var(--darkgrey);
  }
`;
