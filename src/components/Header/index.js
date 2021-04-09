import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderWrap>
      <div>HEADER</div>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  div {
    display: none;
    transition: 0.3s ease-in-out;
    @media (min-width: 700px) {
      display: block;
    }
  }
`;
