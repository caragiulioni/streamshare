import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./Global";

import Home from "./components/Home";
import MobileNav from "./components/MobileNav";
import Header from "./components/Header";
import LogInPage from "./components/LogInPage";
import LogIn from "./components/Home/LogIn";
function App() {
  return (
    <>
      <Header />
      <PageWrapper>
        <GlobalStyles />
        <BrowserRouter>
          <MobileNav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <LogInPage />
            </Route>
            <Route exact path="/home">
              <div>USERPAGE</div>
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
