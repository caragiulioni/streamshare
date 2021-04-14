import React, { useContext } from "react";
import styled from "styled-components";
import { ResultsContext } from "../../context/ResultsContext";
const Results = () => {
  const { results, response } = useContext(ResultsContext);
  console.log("RESULTS", results, response);
  return (
    <ResultsSection>
      {response === "loading" && <div>LOADING</div>}
      {response === "False" && <div>We couldn't find anything.</div>}
      {results && <div>MYRESULTS</div>}
    </ResultsSection>
  );
};

export default Results;

const ResultsSection = styled.section``;
