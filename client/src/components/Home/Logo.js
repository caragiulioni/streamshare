import React from "react";
import styled from "styled-components";
import devices from "../../assets/devices.png";
const Logo = () => {
  return (
    <LogoWrap>
      <h1>Streamshare</h1>
      <h2>What are you watching?</h2>
      <Img>
        <img src={devices} alt="" />
      </Img>
    </LogoWrap>
  );
};

export default Logo;

const LogoWrap = styled.div`
  h1 {
    font-size: 3.5em;
    color: var(--blue);
  }
  h2 {
    color: var(--orange);
    font-size: 1.5em;
    margin: 5px 0px 10px 0px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Img = styled.div`
  margin: 10px 0px;
  opacity: 0.5;
  img {
    width: 250px;
  }
`;
