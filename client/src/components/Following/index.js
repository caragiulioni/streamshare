import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Grid from "./Grid";
import Spinner from "../Spinner";
const Following = () => {
  const currentUser = useSelector((state) => state.user.currentUser.user);
  const [response, setResponse] = useState();
  const [follows, setFollows] = useState();
  const [message, setMessage] = useState();
  useEffect(() => {
    setResponse("loading");
    fetch(`following/${currentUser._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200 && data.data.length) {
          setResponse("loaded");
          setFollows(data.data);
        }
      });
  }, [setFollows]);

  return (
    <FollowingWrapper>
      {!follows && response === "loaded" && (
        <div>start following friends now!</div>
      )}
      {follows && <Grid follows={follows} />}
      {response === "loading" && <Spinner />}
    </FollowingWrapper>
  );
};

export default Following;

const FollowingWrapper = styled.div``;
