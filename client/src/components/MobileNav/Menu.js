import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Menu = ({ open, setOpen }) => {
  return (
    <MenuWrap open={open}>
      <LinkWrap>
        <Link to="/">Home</Link>
        <Link to="/">Settings</Link>
      </LinkWrap>
    </MenuWrap>
  );
};

export default Menu;

const MenuWrap = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  height: 100vh;
  position: absolute;
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
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;
  }

  &:hover {
    color: #343078;
  }
`;

const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
