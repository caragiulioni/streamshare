import React, { useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ResultsContext } from "../../context/ResultsContext";
import styled from "styled-components";
import Spinner from "../Spinner";
import TitleDetails from "./TitleDetails";
import Title from "../Title";
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
      {response === "False" && (
        <div>Hmmm...we can't seem to find that title.</div>
      )}
      {title && <TitleDetails title={title} />}
    </TitleSection>
  );
};

export default TitleFull;

const TitleSection = styled.section``;
