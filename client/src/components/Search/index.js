import React from "react";
import { SectionMain } from "../../Global/sectionStyles";
import SearchBar from "./SearchBar";
import Results from "./Results";
const Search = () => {
  //FETCH TITLES BASED OM USER ID BOOO
  return (
    <SectionMain>
      <SearchBar />
      <Results />
    </SectionMain>
  );
};

export default Search;
