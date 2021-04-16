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
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
