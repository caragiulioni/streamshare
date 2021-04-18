import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { SectionContainer } from "../../Global/sectionStyles";
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
        <>
          <Upload currentUser={currentUser} />
          <ThemeButton />
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Settings;
