import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const dispatch = useDispatch();
  const isStored = localStorage.getItem("streamshareUser");
  const { username } = useParams();
  const [response, setResponse] = useState();
  const { memberData, setMemberData } = useContext(MemberContext);

  useEffect(() => {
    setResponse("loading");
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
    fetch(`/profile/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setMemberData(data.data.userObj);
        setResponse(true);
      });
  }, [isStored, dispatch]);

  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div>
      {memberData ? (
        <>
          <ProfileHeader memberData={memberData} currentUser={currentUser} />
          <ProfileTitles memberData={memberData} />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Profile;
