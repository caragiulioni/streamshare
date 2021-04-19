import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import {
  sendUserData,
  receiveUserData,
  receiveUserDataErr,
} from "../../actions/actions";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser.user);
  console.log(currentUser.avatar);
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
          <Link
            exact
            to={`/sh/${currentUser.username}`}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            <User>
              {currentUser && (
                <>
                  <h2>{currentUser.username}</h2>
                  <Img
                    aria-hidden="true"
                    style={{
                      backgroundImage: `url(${currentUser.avatar})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Img>
                </>
              )}
            </User>
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
  padding: 15px 0px 10px 0px;
  a {
    font-size: 1em;
  }
  @media (min-width: 1080px) {
    padding: 20px 0px 15px 0px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  align-items: center;
  img {
    border-radius: 50%;
    width: 30px;
  }
`;

const Link = styled(NavLink)``;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;
