import React, { useEffect, useState, useRef } from "react";
import { SectionMain } from "../../Global/sectionStyles";
import SearchBar from "./SearchBar";
import Results from "./Results";
import UserSearchBar from "./UserSearchBar";
const Search = () => {
  const [userDisplay, setUserDisplay] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("/users")
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
  }, []);

  return (
    <SectionMain>
      <h3>Search</h3>
      <UserSearchBar options={options} />
      <SearchBar setUserDisplay={setUserDisplay} />
      <Results />
    </SectionMain>
  );
};

export default Search;
