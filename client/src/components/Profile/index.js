import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MemberContext } from "../../context/MemberContext";
import ProfileHeader from "../Header/ProfileHeader/ProfileHeader";
import ProfileTitles from "./ProfileTitles";
import Spinner from "../Spinner";

const Profile = () => {
  let currentUser;
  currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);
  const { username } = useParams();
  const [response, setResponse] = useState();
  const { memberData, setMemberData } = useContext(MemberContext);
  useEffect(() => {
    setResponse("loading");
    fetch(`/profile/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setMemberData(data.data.userObj);
        setResponse(true);
      });
  }, []);

  console.log(memberData);
  return (
    <div>
      {response !== "loading" && memberData ? (
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
