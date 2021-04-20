import React from "react";
import { NavLink } from "react-router-dom";
const StyledLink = ({ link, text }) => {
  return (
    <NavLink
      exact
      to={`/${link}`}
      activeStyle={{
        fontWeight: "bold",
        color: "#E9613F",
      }}
    >
      {text && text}
    </NavLink>
  );
};

export default StyledLink;
