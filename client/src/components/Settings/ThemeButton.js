import React from "react";
import LoginBtn from "../Buttons/LoginBtn";
const ThemeButton = () => {
  const currentTheme = window.localStorage.getItem("streamshareTheme");
  const setTheme = () => {
    const body = document.body;
    if (!currentTheme) {
      body.classList.toggle("dark");
      window.localStorage.setItem("streamshareTheme", "dark");
    } else if (currentTheme === "dark") {
      body.classList.toggle("dark");
      window.localStorage.setItem("streamshareTheme", "");
    }
  };
  return <LoginBtn action={setTheme} text={"Set Theme"} />;
};

export default ThemeButton;
