import React, { useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ResultsContext } from "../../context/ResultsContext";
import styled from "styled-components";
import Spinner from "../Spinner";
const TitleFull = () => {
  const { titleId } = useParams();
  const { response, setResponse, title, setTitle } = useContext(ResultsContext);
  let history = useHistory();

  useEffect(() => {
    setResponse("loading");
    fetch(`/title/${titleId}`)
      .then((res) => res.json())
      .then((data) => {
        data.data.Response === "False" && setResponse(false);
        setResponse(data.data.Response);
        setTitle(data.data);
      });
  }, [titleId]);

  return (
    <TitleSection>
      {response === "loading" && <Spinner />}
      {response === "False" && <div>We couldn't find anything.</div>}
    </TitleSection>
  );
};

export default TitleFull;

const TitleSection = styled.section``;
