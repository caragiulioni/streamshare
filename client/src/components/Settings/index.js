import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { SectionContainer } from "../../Global/sectionStyles";

const Settings = () => {
  //FETCH TITLES BASED OM USER ID BOOO
  const titles = useSelector(
    (state) => state.user.currentUser.user.userTitles.titles
  );
  const currentUser = useSelector((state) => state.user.currentUser.user);
  console.log(currentUser);
  return <SectionContainer>SETTINGS</SectionContainer>;
};

export default Settings;
