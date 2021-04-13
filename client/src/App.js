import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GlobalStyles from "./Global";

import Home from "./components/Home";
import MobileNav from "./components/MobileNav";
import Header from "./components/Header";
import LogInPage from "./components/LogInPage";
import Dashboard from "./components/Dashboard";
function App() {
  const currentUser = useSelector((state) => state);
  return (
    <>
      {currentUser && <Header />}
      <PageWrapper>
        <GlobalStyles />
        <BrowserRouter>
          {currentUser && <MobileNav />}
          <Switch>
            <Route exact path="/">
              {currentUser ? <Redirect to="/dashboard" /> : <Home />}
            </Route>
            <Route exact path="/login">
              <LogInPage />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
      </PageWrapper>
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
