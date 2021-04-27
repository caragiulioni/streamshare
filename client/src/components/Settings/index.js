import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { SectionContainer } from "../../Global/sectionStyles";

const Settings = () => {
  let history = useHistory();
  const [status, setStatus] = useState();
  const currentUser = useSelector((state) => state.user.currentUser);
  const isStored = localStorage.getItem("streamshareUser");
  const dispatch = useDispatch();

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
  }, [isStored, dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("streamshareUser");
    dispatch(removeCurrentUser(null));
    history.push("/");
  };

  return (
    <>
      {status !== "loading" && currentUser ? (
        <SectionContainer>
          <h3>SETTINGS</h3>
          <Upload currentUser={currentUser} />
          <ThemeButton />
          <LoginBtn action={handleLogout} text={"Log Out"} />
        </SectionContainer>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Settings;
