import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { SectionContainer } from "../../Global/sectionStyles";

const Settings = () => {
  // const currentUser = useSelector((state) => state.user.currentUser.user);
  // console.log(currentUser);
  const setTheme = () => {
    const body = document.body;
    body.classList.toggle("dark");
    window.localStorage.setItem("theme", "dark");
  };
  return (
    <SectionContainer>
      <button onClick={setTheme}>Set Theme</button>
    </SectionContainer>
  );
};

export default Settings;
