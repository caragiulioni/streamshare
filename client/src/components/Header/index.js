import React, { useEffect } from "react";
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
  const dispatch = useDispatch();
  const isStored = localStorage.getItem("streamshareUser");
  useEffect(() => {
    if (isStored) {
      dispatch(sendUserData());
      fetch(`/auth/${isStored}`)
        .then((res) => res.json())
        .then((data) => {
          try {
            dispatch(receiveUserData(data.data));
          } catch (err) {
            dispatch(receiveUserDataErr());
          }
        });
    }
  }, [isStored]);

  const currentUser = useSelector((state) => state.user.currentUser);

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
          <img src={currentUser.user.avatar} alt={currentUser.user.username} />
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
    width: 30px;
  }
`;

const Link = styled(NavLink)``;
