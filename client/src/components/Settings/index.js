import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ThemeButton from "./ThemeButton";
import { useHistory } from "react-router-dom";
import { removeCurrentUser } from "../../actions/actions";
import {
  sendUserData,
  receiveUserData,
  receiveUserDataErr,
} from "../../actions/actions";
import Spinner from "../Spinner";
import Upload from "./Upload";
import LoginBtn from "../Buttons/LoginBtn";

const Settings = () => {
  let history = useHistory();
  const [status, setStatus] = useState();
  const currentUser = useSelector((state) => state.user.currentUser);
  const isStored = localStorage.getItem("streamshareUser");
  const dispatch = useDispatch();
  const [dark, setDark] = useState();
  const currentTheme = localStorage.getItem("streamshareTheme");

  useEffect(() => {
    setStatus("loading");
    if (isStored) {
      dispatch(sendUserData());
      fetch(`auth/${isStored}`)
        .then((res) => res.json())
        .then((data) => {
          try {
            dispatch(receiveUserData(data.data));
            setStatus("loaded");
          } catch (err) {
            dispatch(receiveUserDataErr());
          }
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("streamshareUser");
    dispatch(removeCurrentUser(null));
    history.push("/");
  };

  return (
    <>
      {status !== "loading" && currentUser ? (
        <Wrapper>
          <h3>SETTINGS</h3>
          <Upload currentUser={currentUser} />
          <ThemeButton />
          <LoginBtn action={handleLogout} text={"Log Out"} />
        </Wrapper>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Settings;

const Wrapper = styled.div`
  margin: 25px 0px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    text-align: center;
    margin: 15px 0px;
    font-size: 1.5em;
    color: var(--blue);
    font-weight: bold;
  }
  button {
    width: 80px;
  }
`;
