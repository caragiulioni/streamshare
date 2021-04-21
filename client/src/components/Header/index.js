import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { IoIosSettings } from "react-icons/io";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser.user);
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
            to={`/sh/${currentUser.username}`}
            activeStyle={{
              fontWeight: "bold",
              color: "#E9613F",
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
          <Settings>
            <Link
              exact
              to="/settings"
              activeStyle={{
                fontWeight: "bold",
                color: "#E9613F",
              }}
            >
              <IoIosSettings size={30} />
            </Link>
          </Settings>
        </Right>
      </ContentWrapper>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  transition: 0.3s ease-in-out;
  background-color: rgb(52, 54, 74, 0.05);
  padding: 15px 0px 10px 0px;
  a {
    font-size: 1em;
    color: var(--darkgrey);
    font-weight: bold;
    padding: 0px 5px;
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
  align-items: center;
  h1 {
    font-size: 1.5em;
    color: var(--blue);
    margin-bottom: 3px;
  }
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

const Settings = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: block;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  h2 {
    padding: 0px 5px;
  }
`;

const Img = styled.div`
  border: 2px solid var(--blue);
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;
