import React, { useEffect, useState, useContext } from "react";
import { SectionMain } from "../../Global/sectionStyles";
import SearchBar from "./SearchBar";
import Results from "./Results";
import UserSearchBar from "./UserSearchBar";
import { ResultsContext } from "../../context/ResultsContext";
const Search = () => {
  const [options, setOptions] = useState([]);
  const { setResults, setResponse } = useContext(ResultsContext);
  const [query, setQuery] = useState({ query: "" });

  useEffect(() => {
    setResults();
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        const sort = data.members.sort((a, b) => {
          const lowerA = a.username.toLowerCase();
          const lowerB = b.username.toLowerCase();
          if (lowerA > lowerB) {
            return 1;
          } else {
            return -1;
          }
        });
        setOptions(sort);
      });
  }, [setResults]);

  return (
    <SectionMain>
      <h3>Search</h3>
      <UserSearchBar
        setResults={setResults}
        setResponse={setResponse}
        options={options}
        setQuery={setQuery}
        query={query}
      />
      <SearchBar
        query={query}
        setQuery={setQuery}
        setResults={setResults}
        setResponse={setResponse}
      />
      <Results />
    </SectionMain>
  );
};

export default Search;
