import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { SectionContainer } from "../../Global/sectionStyles";
import TitlesWelcome from "./TitlesWelcome";

const MyTitles = () => {
  //FETCH TITLES BASED OM USER ID BOOO
  const titles = useSelector(
    (state) => state.user.currentUser.user.userTitles.titles
  );
  const currentUser = useSelector((state) => state.user.currentUser.user);
  return titles.length ? (
    <div>My Titles</div>
  ) : (
    <SectionContainer>
      <TitlesWelcome currentUser={currentUser} />
    </SectionContainer>
  );
};

export default MyTitles;
