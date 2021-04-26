import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Menu = ({ open, setOpen }) => {
  return (
    <MenuWrap open={open}>
      <LinkWrap>
        <Link onClick={() => setOpen(!open)} to="/mytitles">
          My Titles
        </Link>
        <Link onClick={() => setOpen(!open)} to="/search">
          Search
        </Link>
        <Link onClick={() => setOpen(!open)} to="/following">
          Following
        </Link>
        <Link onClick={() => setOpen(!open)} to="/settings">
          Settings
        </Link>
      </LinkWrap>
    </MenuWrap>
  );
};

export default Menu;

const MenuWrap = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(52, 54, 74, 0.9);
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  height: 110vh;
  position: fixed;
  z-index: 5;
  bottom: 0;
  right: 0;
  left: 0; //remove?
  transition: 0.8s ease-in-out;
  width: 100%;
  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: var(--offwhite);
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;

const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
