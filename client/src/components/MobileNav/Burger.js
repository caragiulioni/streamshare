import React from "react";
import styled from "styled-components";
const Burger = ({ open, setOpen }) => {
  return (
    <Wrapper>
      <Button
        aria-label="mobile-menu"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div aria-hidden="true" />
        <div aria-hidden="true" />
        <div aria-hidden="true" />
      </Button>
    </Wrapper>
  );
};

export default Burger;
const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  z-index: 8;
  background-color: var(--blue);
`;
const Button = styled.button`
  background-color: rgb(52, 54, 74, 0.05);
  position: fixed;
  bottom: 0;
  left: 2rem; //remove?
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
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
    background: ${({ open }) => (open ? "white" : "white")};
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

const Divs = styled.div``;
