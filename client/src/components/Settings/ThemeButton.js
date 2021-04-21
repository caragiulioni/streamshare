import React, { useState } from "react";
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
      body.classList.toggle("light");
      window.localStorage.setItem("streamshareTheme", "light");
      setDark();
    } else if (currentTheme === "light") {
      body.classList.toggle("light");
      body.classList.toggle("dark");
      window.localStorage.setItem("streamshareTheme", "dark");
    }
  };
  return <button onClick={setTheme}>Set Theme</button>;
};

export default ThemeButton;
