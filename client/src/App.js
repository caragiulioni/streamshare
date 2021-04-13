import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import GlobalStyles from "./Global";
import { receiveUserData, receiveUserDataErr } from "./actions/actions";

import Home from "./components/Home";
import MobileNav from "./components/MobileNav";
import Header from "./components/Header";
import LogInPage from "./components/LogInPage";
import MyTitles from "./components/MyTitles";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const isStored = localStorage.getItem("streamshareUser");
    fetch(`/auth/${isStored}`)
      .then((res) => res.json())
      .then((data) => {
        try {
          return dispatch(receiveUserData(data.data));
        } catch (err) {
          return dispatch(receiveUserDataErr());
        }
      });

    //FE
    //dispatch to reducer
    //AND
    //remove local storage on loutout and redirect
  }, []);
  let currentUser;
  currentUser = useSelector((state) => state.user.currentUser);
  //console.log("APP.JS", currentUser);
  return (
    <>
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
              SEARCH
            </Route>
            <Route exact path="/settings">
              SEARCH
            </Route>
          </Switch>
        </PageWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;

const PageWrapper = styled.main`
  background-color: white;
  overflow: hidden;
  margin: 0px 10px 10px 10px;

  @media screen and (min-width: 700px) {
    margin: 0px 15px 15px 15px;
  }
  @media screen and (min-width: 1080px) {
    margin: 0px 25px 25px 25px;
  }
`;
