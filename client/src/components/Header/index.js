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
    transition: 0.3s ease-in-out;
    background-color: blue;
    height: 30px;
    @media (min-width: 700px) {
      height: 45px;
    }
  }
`;
