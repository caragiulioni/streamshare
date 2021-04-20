import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import StyledLink from "../StyledLink";

const Nav = () => {
  return (
    <NavContainer>
      <StyledLink link={"mytitles"} text={"MY TITLES"} />
      <StyledLink link={"search"} text={"SEARCH"} />
      <StyledLink link={"following"} text={"FOLLOWING"} />
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
