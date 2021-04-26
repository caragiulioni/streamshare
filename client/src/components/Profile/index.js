import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MemberContext } from "../../context/MemberContext";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileTitles from "./ProfileTitles";
import Spinner from "../Spinner";
import {
  sendUserData,
  receiveUserData,
  receiveUserDataErr,
} from "../../actions/actions";

const Profile = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const isStored = localStorage.getItem("streamshareUser");
  const { username } = useParams();
  const [response, setResponse] = useState();
  const [memberData, setMemberData] = useState();
  useEffect(() => {
    setResponse("loading");
    fetch(`/profile/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setMemberData(data.data.userObj);
          setResponse("loaded");
        } else {
          setResponse("loaded");
        }
      });
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
  }, [setMemberData, setResponse, isStored]);

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
    </div>
  );
};

export default Profile;
