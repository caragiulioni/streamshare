import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Nav = () => {
  return (
    <NavContainer>
      <Link
        exact
        to="/mytitles"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        MYTITLES
      </Link>
      <Link
        exact
        to="/search"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        SEARCH
      </Link>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  display: flex;
`;

const Link = styled(NavLink)``;
