import React from "react";
import styled from "styled-components";
import StyledLink from "../StyledLink";

const Nav = () => {
  return (
    <NavContainer>
      <StyledLink link={"mytitles"} text={"MY TITLES"} />
      <StyledLink link={"search"} text={"SEARCH"} />
      <StyledLink link={"following"} text={"FOLLOWING"} />
      <StyledLink link={"popular"} text={"POPULAR"} />
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
