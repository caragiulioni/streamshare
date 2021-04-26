import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ResultsProvider } from "./context/ResultsContext";
import { MemberProvider } from "./context/MemberContext";
import styled from "styled-components";
import GlobalStyles from "./Global";
import Variables from "./Global/Variables";
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
import Following from "./components/Following";
import Error from "./components/Error/index.js";
function App() {
  const dispatch = useDispatch();
  const isStored = localStorage.getItem("streamshareUser");
  const theme = localStorage.getItem("streamshareTheme");
  const currentUser = useSelector((state) => state.user.currentUser);
  const body = document.body;
  useEffect(() => {
    if (theme === "dark") {
      body.classList.toggle("dark");
    }

    if (isStored) {
      dispatch(sendUserData());
      fetch(`/auth/${isStored}`)
        .then((res) => res.json())
        .then((data) => {
          try {
            return dispatch(receiveUserData(data.data));
          } catch (err) {
            return dispatch(receiveUserDataErr());
          }
        });
    }
  }, [isStored]);

  return (
    <>
      <MemberProvider>
        <ResultsProvider>
          <GlobalStyles />
          {/* <Variables /> */}
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
                  {currentUser ? <MyTitles /> : <Redirect to="/" />}
                </Route>
                <Route exact path="/search">
                  {currentUser ? <Search /> : <Redirect to="/" />}
                </Route>
                <Route exact path="/following">
                  {currentUser ? <Following /> : <Redirect to="/" />}
                </Route>
                <Route exact path="/settings">
                  {currentUser ? <Settings /> : <Redirect to="/" />}
                </Route>
                <Route exact path="/title/:titleId">
                  {currentUser ? <TitleFull /> : <Redirect to="/" />}
                </Route>
                <Route exact path="/sh/:username">
                  <Profile />
                </Route>
                <Route>
                  <Error />
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
  height: calc(100vh - 25px); //account for mobile menu
  margin: 0px 10px 10px 10px;

  @media screen and (min-width: 700px) {
    margin: 0px 15px 15px 15px;
  }
  @media screen and (min-width: 1080px) {
    height: calc(100vh - 35px);
    margin: 0px 25px 25px 25px;
  }
`;
