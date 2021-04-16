import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { SectionContainer } from "../../Global/sectionStyles";

const Settings = () => {
  const [dark, setDark] = useState();

  const setTheme = () => {
    const currentTheme = window.localStorage.getItem("theme");
    console.log(currentTheme);
    if (currentTheme === "dark") {
      window.localStorage.setItem("theme", undefined);
    } else if (currentTheme === "") {
      const body = document.body;
      body.classList.toggle("dark");
      window.localStorage.setItem("theme", "dark");
    }
  };
  return (
    <SectionContainer>
      <button onClick={setTheme}>Set Theme</button>
    </SectionContainer>
  );
};

export default Settings;
