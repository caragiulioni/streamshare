import React, { useContext } from "react";
import styled from "styled-components";
import { ResultsContext } from "../../context/ResultsContext";
import ResultsContainer from "./ResultsContainer";
import Spinner from "../Spinner";
const Results = () => {
  const { results, response } = useContext(ResultsContext);
  return (
    <ResultsSection>
      {response === "loading" && <Spinner />}
      {response === "False" && <div>We couldn't find anything.</div>}
      {results && <ResultsContainer results={results} />}
    </ResultsSection>
  );
};

export default Results;

const ResultsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
