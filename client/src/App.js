import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ResultsProvider } from "./context/ResultsContext";
import { MemberProvider } from "./context/MemberContext";
import styled from "styled-components";
import GlobalStyles from "./Global";
import {
  sendUserData,
  receiveUserData,
  receiveUserDataErr,
} from "./actions/actions";

import Home from "./components/Home";
import MobileNav from "./components/MobileNav";
import Header from "./components/Header";
import LogInPage from "./components/LogInPage";
import MyTitles from "./components/MyTitles";
import Search from "./components/Search";
import Settings from "./components/Settings";
import TitleFull from "./components/TitleFull";
import Profile from "./components/Profile";
function App() {
  const dispatch = useDispatch();
  // const updateData = useSelector((state) => state.updateData);
  const isStored = localStorage.getItem("streamshareUser");
  const theme = localStorage.getItem("theme");
  console.log(theme);
  useEffect(() => {
    if (theme === "dark") {
      const body = document.body;
      body.classList.toggle("dark");
      window.localStorage.setItem("theme", "dark");
    }

    if (theme === undefined) {
      const body = document.body;
      body.classList.toggle("dark");
      window.localStorage.setItem("theme", "dark");
    }

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
  let currentUser;
  currentUser = useSelector((state) => state.user.currentUser);
  return (
    <>
      <MemberProvider>
        <ResultsProvider>
          <GlobalStyles />
          <BrowserRouter>
            {currentUser && <Header />}
            {currentUser && <MobileNav />}
            <PageWrapper>
              <Switch>
                <Route exact path="/">
                  {currentUser ? <Redirect to="/mytitles" /> : <Home />}
                </Route>
                <Route exact path="/login">
                  <LogInPage />
                </Route>
                <Route exact path="/mytitles">
                  {!currentUser ? <Redirect to="/" /> : <MyTitles />}
                </Route>
                <Route exact path="/search">
                  <Search />
                </Route>
                <Route exact path="/settings">
                  <Settings />
                </Route>
                <Route exact path="/title/:titleId">
                  <TitleFull />
                </Route>
                <Route exact path="/sh/:username">
                  <Profile />
                </Route>
              </Switch>
            </PageWrapper>
          </BrowserRouter>
        </ResultsProvider>
      </MemberProvider>
    </>
  );
}

export default App;

const PageWrapper = styled.main`
  height: calc(100vh - 25px); // vh - header index.js
  margin: 0px 10px 10px 10px;

  @media screen and (min-width: 700px) {
    margin: 0px 15px 15px 15px;
  }
  @media screen and (min-width: 1080px) {
    height: calc(100vh - 35px); // vh - header index.js
    margin: 0px 25px 25px 25px;
  }
`;
