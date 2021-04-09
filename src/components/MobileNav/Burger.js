import React from "react";
import styled from "styled-components";
const Burger = ({ open, setOpen }) => {
  return (
    <Button aria-label="mobile-menu" open={open} onClick={() => setOpen(!open)}>
      <div aria-hidden="true" />
      <div aria-hidden="true" />
      <div aria-hidden="true" />
    </Button>
  );
};

export default Burger;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  margin-bottom: 1em;
  left: 2rem; //remove?
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

  @media (min-width: 700px) {
    display: none;
  }

  &:focus {
    outline: cyan;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    @media (min-width: 700px) {
      display: none;
    }
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
