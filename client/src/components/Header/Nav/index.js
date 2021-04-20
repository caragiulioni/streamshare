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
          color: "#E9613F",
        }}
      >
        MYTITLES
      </Link>
      <Link
        exact
        to="/search"
        activeStyle={{
          fontWeight: "bold",
          color: "#E9613F",
        }}
      >
        SEARCH
      </Link>

      <Link
        exact
        to="/following"
        activeStyle={{
          fontWeight: "bold",
          color: "#E9613F",
        }}
      >
        FOLLOWING
      </Link>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  display: flex;
  display: none;
  @media (min-width: 700px) {
    display: block;
  }
`;

const Link = styled(NavLink)``;
