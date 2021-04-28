import React from "react";
import styled from "styled-components";
const FilterBar = ({ value, setValue }) => {
  return (
    <Wrapper>
      <h5>Filter by Genre: </h5>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ex. comedy, drama, thriller"
      />
    </Wrapper>
  );
};

export default FilterBar;

const Wrapper = styled.div`
  padding: 0px 5px;
  display: flex;
  align-items: baseline;
  h5 {
    color: var(--orange);
  }
  input {
    width: 150px;
    margin: 0px 5px;
    height: 18px;
  }

  @media (min-width: 1024px) {
    margin: 10px 0px;
  }
`;
