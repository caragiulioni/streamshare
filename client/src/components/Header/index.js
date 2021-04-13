import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
const Header = () => {
  return (
    <HeaderWrap>
      <ContentWrapper>
        <Left>
          <h1>Streamshare</h1>
          <Nav />
        </Left>
        <Right>
          <Link
            exact
            to="/settings"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            SETTINGS
          </Link>
        </Right>
      </ContentWrapper>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  transition: 0.3s ease-in-out;
  background-color: blue;
  padding: 20px 0px 15px 0px;
  @media (min-width: 700px) {
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 10px;
  h1 {
    padding-right: 20px;
  }

  @media screen and (min-width: 700px) {
    margin: 0px 15px;
  }
  @media screen and (min-width: 1080px) {
    margin: 0px 25px;
  }
`;

const Left = styled.div`
  display: flex;
`;

const Right = styled.div`
  display: flex;
`;

const Link = styled(NavLink)``;
