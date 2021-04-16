import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { SectionContainer } from "../../Global/sectionStyles";
import ThemeButton from "./ThemeButton";

const Settings = () => {
  const [dark, setDark] = useState();
  const currentTheme = localStorage.getItem("streamshareTheme");
  const setTheme = () => {
    const body = document.body;
    if (currentTheme === "dark") {
      body.classList.toggle("dark");
      body.classList.toggle("light");
      localStorage.setItem("streamshareTheme", "light");
    }
    if (currentTheme === "light") {
      body.classList.toggle("light");
      body.classList.toggle("dark");
      localStorage.setItem("streamshareTheme", "dark");
    }
  };
  return (
    <SectionContainer>
      <ThemeButton />
    </SectionContainer>
  );
};

export default Settings;
