import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ResultsContext } from "../../context/ResultsContext";
import styled from "styled-components";
import Spinner from "../Spinner";
import TitleDetails from "./TitleDetails";
const TitleFull = () => {
  const { titleId } = useParams();
  const [found, setFound] = useState(null);
  const currentUser = useSelector((state) => state.user.currentUser);
  const { response, setResponse, title, setTitle } = useContext(ResultsContext);
  useEffect(() => {
    setResponse("loading");
    fetch(`/titles/${currentUser.user._id}`)
      .then((res) => res.json())
      .then((data) => {
        const find = data.data.titles.find((title) => {
          return title.imdbID == titleId;
        });
        if (find) {
          setFound(true);
        } else {
          setFound(false);
        }
      });

    currentUser &&
      fetch(`/title/${titleId}`)
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
