import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Grid from "./Grid";
import Spinner from "../Spinner";
import FollowingWelcome from "./FollowingWelcome";

const Following = () => {
  const currentUser = useSelector((state) => state.user.currentUser.user);
  const [response, setResponse] = useState();
  const [follows, setFollows] = useState();
  useEffect(() => {
    setResponse("loading");
    if (currentUser) {
      fetch(`following/${currentUser._id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200 && data.data.length) {
            setResponse();
            setFollows(data.data);
          }
          if (data.status === 400) {
            setResponse("loaded");
          }
        });
    }
  }, [setFollows, currentUser]);

  return (
    <FollowingWrapper>
      {!follows && response === "loaded" && <FollowingWelcome />}
      {follows && <Grid follows={follows} />}
      {response === "loading" && <Spinner />}
    </FollowingWrapper>
  );
};

export default Following;

const FollowingWrapper = styled.div``;
