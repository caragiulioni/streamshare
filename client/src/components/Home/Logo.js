import React from "react";
import styled from "styled-components";
const Logo = () => {
  return (
    <LogoWrap>
      <h1>Streamshare</h1>
      <h2>What are you watching?</h2>
    </LogoWrap>
  );
};

export default Logo;

const LogoWrap = styled.div`
  h1 {
    font-size: 6em;
    color: var(--blue);
  }
  h2 {
    color: var(--smoke);
    font-weight: bold;
    font-size: 2.5em;
    margin: 5px 0px 10px 0px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
