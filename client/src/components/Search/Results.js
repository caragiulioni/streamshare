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
      {response === "False" && (
        <NoResult>
          <p>Hmmm...we couldn't find anything!</p>
          <p>
            Try expanding your search Ex. queen's gambit instead of queens
            gambit or law &amp; order instead of law and order
          </p>
        </NoResult>
      )}
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

const NoResult = styled.div`
  width: 70%;
  p {
    font-size: 0.8em;
    margin: 5px 0px;
  }

  p:first-of-type {
    text-align: center;
    margin: 10px;
    color: var(--blue);
  }
  @media screen and (min-width: 700px) {
    width: 30%;
  }
`;
