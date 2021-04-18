import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ResultsContext } from "../../context/ResultsContext";
import styled from "styled-components";
import Spinner from "../Spinner";
import TitleDetails from "./TitleDetails";
import Title from "../Title";
const TitleFull = () => {
  const { titleId } = useParams();
  const [found, setFound] = useState(null);
  const currentUser = useSelector((state) => state.user.currentUser);
  const { response, setResponse, title, setTitle } = useContext(ResultsContext);
  useEffect(() => {
    setResponse("loading");
    if (currentUser) {
      const find = currentUser.user.userTitles.titles.find((title) => {
        return title.imdbID === titleId;
      });
      if (find) {
        setFound(true);
      } else {
        setFound(false);
      }
    }
    fetch(`api/title/${titleId}`)
      .then((res) => res.json())
      .then((data) => {
        data.data.Response === "False" && setResponse(false);
        setResponse(data.data.Response);
        setTitle(data.data);
      });
  }, [currentUser, titleId, setResponse]);

  return (
    <TitleSection>
      {response === "loading" ? (
        <Spinner />
      ) : (
        <>
          {response === "False" && (
            <div>Hmmm...we can't seem to find that title.</div>
          )}
          {title && (
            <TitleDetails setFound={setFound} found={found} title={title} />
          )}
        </>
      )}
    </TitleSection>
  );
};

export default TitleFull;

const TitleSection = styled.section``;
