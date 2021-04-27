import React, { useState } from "react";
import styled from "styled-components";
const SortComponent = ({ titles, setTitles, original }) => {
  const [active, setActive] = useState();
  const blue = "#66D1AB";

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

  const firstToLast = () => {
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
        style={{ color: active === "descend" ? blue : "lightgrey" }}
        onClick={descend}
      >
        Z-A
      </button>
      <button
        style={{ color: active === "ascend" ? blue : "lightgrey" }}
        onClick={ascend}
      >
        A-Z
      </button>
      <button
        style={{ color: active === "last" ? blue : "lightgrey" }}
        onClick={firstToLast}
      >
        first to last
      </button>
      <button
        style={{ color: active === "revert" ? blue : "lightgrey" }}
        onClick={revert}
      >
        last to first
      </button>
    </Wrapper>
  );
};

export default SortComponent;

const Wrapper = styled.div`
  button {
    font-size: 1em;
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    color: var(--darkgrey);
  }
`;
