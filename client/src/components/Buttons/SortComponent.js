import React, { useState } from "react";
import styled from "styled-components";
const SortComponent = ({ titles, setTitles, original }) => {
  const [prev, setPrev] = useState();

  //simulate navlink behavior on button click
  const remove = (prev) => {
    document.getElementById(prev).classList.remove("active");
  };
  const addActive = (id) => {
    document.getElementById(id).classList.add("active");
  };

  const descend = (prev, id) => {
    prev && remove(prev);
    addActive(id);
    setPrev(id);
    const arr = [...titles].sort((a, b) => a.Title.localeCompare(b.Title));
    return setTitles(arr);
  };

  const ascend = (prev, id) => {
    prev && remove(prev);
    addActive(id);
    setPrev(id);
    const arr = [...titles].sort((a, b) => b.Title.localeCompare(a.Title));
    return setTitles(arr);
  };

  const lastToFirst = (prev, id) => {
    prev && remove(prev);
    addActive(id);
    setPrev(id);
    const arr = [...titles].reverse();
    return setTitles(arr);
  };

  const revert = (prev, id) => {
    prev && remove(prev);
    addActive(id);
    setPrev(id);
    setTitles(original);
  };
  return (
    <Wrapper>
      <button id="ascend" onClick={() => descend(prev, "ascend")}>
        Z-A
      </button>
      <button id="descend" onClick={() => ascend(prev, "descend")}>
        A-Z
      </button>
      <button id="last-first" onClick={() => lastToFirst(prev, "last-first")}>
        last to recent
      </button>
      <button id="revert" onClick={() => revert(prev, "revert")}>
        recent to last
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
    color: var(--blue);
    transition: 0.3s ease-in-out;
  }

  button:hover {
    color: var(--darkgrey);
  }

  .active {
    color: var(--orange);
  }
`;
