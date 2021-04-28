import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileTitles from "./ProfileTitles";
import styled from "styled-components";
import Spinner from "../Spinner";
import Error from "./Error";
import {
  sendUserData,
  receiveUserData,
  receiveUserDataErr,
} from "../../actions/actions";

const Profile = () => {
  const dispatch = useDispatch();
  const isStored = localStorage.getItem("streamshareUser");
  const { username } = useParams();
  const [response, setResponse] = useState();
  const [memberData, setMemberData] = useState();
  useEffect(() => {
    setResponse("loading");
    fetch(`/api/profile/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setMemberData(data.data.userObj);
          setResponse("loaded");
        } else {
          console.log(data);
          setResponse(false);
        }
      });
    if (isStored) {
      dispatch(sendUserData());
      fetch(`/api/auth/${isStored}`)
        .then((res) => res.json())
        .then((data) => {
          try {
            dispatch(receiveUserData(data.data));
          } catch (err) {
            dispatch(receiveUserDataErr());
          }
        });
    }
  }, [dispatch, username, setMemberData, setResponse, isStored]);

  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div>
      {memberData && (
        <>
          <ProfileHeader memberData={memberData} currentUser={currentUser} />
          <ProfileTitles memberData={memberData} />
        </>
      )}
      {response === "loading" && <Spinner />}
      {response === false && <Error />}
    </div>
  );
};

export default Profile;
