import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { SectionContainer } from "../../Global/sectionStyles";
import ThemeButton from "./ThemeButton";
import { useHistory } from "react-router-dom";
import { removeCurrentUser } from "../../actions/actions";
const Settings = () => {
  let history = useHistory();
  const dispatch = useDispatch();

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

  const handleLogout = () => {
    console.log("click");
    localStorage.removeItem("streamshareUser");
    dispatch(removeCurrentUser(null));
    history.push("/");
  };
  return (
    <SectionContainer>
      <ThemeButton />
      <button onClick={handleLogout}>Log Out</button>
    </SectionContainer>
  );
};

export default Settings;
