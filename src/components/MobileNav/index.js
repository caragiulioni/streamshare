import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Menu from "./Menu";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <MobileWrapper>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </MobileWrapper>
  );
};

export default MobileNav;

const MobileWrapper = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`;
