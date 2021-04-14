import React from "react";
import styled from "styled-components";
import { SectionWrapper } from "../../Global/sectionStyles";
const TitlesWelcome = ({ currentUser }) => {
  const { username } = currentUser;
  return (
    <SectionWrapper>
      <h2>
        Welcome <span>{username}</span>! Let's get started.
      </h2>
      <h3>This is your Titles List.</h3>
      You can use it to keep track of shows and movies you have loved or ones
      you want to view in the future. Try doing a search and adding titles to
      your list now.
    </SectionWrapper>
  );
};

export default TitlesWelcome;

const WelcomeWrapper = styled.div``;
