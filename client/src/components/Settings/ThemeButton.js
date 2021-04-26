import React, { useState } from "react";
import LoginBtn from "../Buttons/LoginBtn";
const ThemeButton = () => {
  const [dark, setDark] = useState();
  const currentTheme = window.localStorage.getItem("streamshareTheme");
  const setTheme = () => {
    const body = document.body;
    if (!currentTheme) {
      body.classList.toggle("dark");
      window.localStorage.setItem("streamshareTheme", "dark");
      setDark(true);
    } else if (currentTheme === "dark") {
      body.classList.toggle("dark");
      window.localStorage.setItem("streamshareTheme", "");
      setDark(true);
    }
  };
  return <LoginBtn action={setTheme} text={"Set Theme"} />;
};

export default ThemeButton;
