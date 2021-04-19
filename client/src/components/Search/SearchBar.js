import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ResultsContext } from "../../context/ResultsContext";
const SearchBar = () => {
  const [query, setQuery] = useState({ query: "" });
  const { setResults, setResponse } = useContext(ResultsContext);

  const handleChange = (val, item) => {
    setQuery({ ...query, [item]: val.toLowerCase() });
  };
  const length = query.query.length;

  const handleSearch = (event) => {
    setResponse("loading");
    event.preventDefault();
    fetch("/search", {
      method: "POST",
      body: JSON.stringify(query),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.data.Response === "False" && setResponse(false);

        setResponse(data.data.Response);
        setResults(data.data.Search);
      });
  };
  return (
    <Search>
      <Form>
        <label htmlFor="search"></label>
        <input
          placeholder="ex. Queen's Gambit"
          name="search"
          type="text"
          value={query.query}
          onChange={(ev) => handleChange(ev.target.value, "query")}
        />
        <Buttons>
          <button onClick={handleSearch} disabled={length > 0 ? false : true}>
            Search
          </button>
          <button>Clear</button>
        </Buttons>
      </Form>
    </Search>
  );
};

export default SearchBar;

const Search = styled.div`
  padding: 10px 0px;
  @media (min-width: 700px) {
    padding: 15px 0px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    width: 150px;
  }
  button {
    margin: 5px 0px;
  }
`;

const Buttons = styled.div``;
