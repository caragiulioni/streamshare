import React from "react";
import styled from "styled-components";
import { SectionWrapper } from "../../Global/sectionStyles";
const TitlesWelcome = ({ currentUser }) => {
  const { username } = currentUser;
  return (
    <SectionWrapper>
      <h2>
        Welcome <span>{username}</span>!
      </h2>
      <p>Let's get started.</p>
      <h4>This is your Titles List.</h4>
      Use it to keep track of shows, movies or video games want to recommend to
      friends or ones you want to check out in the future. Try doing a search
      and adding some titles to your list now.
    </SectionWrapper>
  );
};

export default TitlesWelcome;

const WelcomeWrapper = styled.div``;
