import React, { useState } from "react";
import styled from "styled-components";
const SearchBar = () => {
  const [query, setQuery] = useState({ query: "" });
  const [response, setResponse] = useState(undefined);
  const [results, setResults] = useState(undefined);

  const handleChange = (val, item) => {
    setQuery({ ...query, [item]: val.toLowerCase() });
  };

  const length = query.query.length;
  console.log(length);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(query);
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
        setResponse(data.data.Response);
        setResults(data.data.Search);
      });
  };

  console.log(response);
  console.log(results);
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
  background-color: grey;
  padding: 10px 0px;
  @media (min-width: 700px) {
    padding: 15px 0px;
  }
  @media (min-width: 1080px) {
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
