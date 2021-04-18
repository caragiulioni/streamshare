import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SignUp from "../../Home/SignUp";
import LogIn from "../../Home/LogIn";
const ProfileHeader = ({ memberData, currentUser }) => {
  const { username, avatar } = memberData;
  const memberId = memberData._id;
  const [following, setFollowing] = useState();
  let userId;
  useEffect(() => {
    if (currentUser && memberData) {
      const userId = currentUser.user._id;
      const find = currentUser.user.follows.follows.find((member) => {
        return memberId === member;
      });
      if (find) {
        setFollowing(true);
      } else {
        setFollowing(false);
      }
    }
  }, [currentUser, memberData, setFollowing]);

  console.log(following);

  const handleFollow = () => {
    const followData = {
      userId: currentUser.user._id,
      memberId: memberId,
    };

    if (!following) {
      fetch("/follow", {
        method: "POST",
        body: JSON.stringify(followData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setFollowing(true);
          } else {
            return data.msg;
          }
        });
    } else {
      fetch("/unfollow", {
        method: "DELETE",
        body: JSON.stringify(followData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setFollowing(false);
          } else {
            return data.msg;
          }
        });
    }
  };
  return (
    <HeaderWrap>
      <ContentWrapper>
        <Left>
          <Img>
            <img src={avatar} alt={username} />
          </Img>
          <Inner>
            <h2>{username}'s current titles</h2>{" "}
            {currentUser && (
              <button onClick={handleFollow}>
                {following ? "Unfollow" : "Follow"}
              </button>
            )}
          </Inner>
        </Left>
        <Right>
          {!currentUser && (
            <>
              <SignUp />
              <LogIn />
            </>
          )}
        </Right>
      </ContentWrapper>
    </HeaderWrap>
  );
};

export default ProfileHeader;

const HeaderWrap = styled.header`
  transition: 0.3s ease-in-out;
  background-color: blue;
  padding: 15px 0px 10px 0px;
  a {
    font-size: 1em;
  }
  @media (min-width: 1080px) {
    padding: 20px 0px 15px 0px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px;
  h1 {
    padding-right: 20px;
  }

  @media screen and (min-width: 700px) {
    margin: 0px 15px;
  }
  @media screen and (min-width: 1080px) {
    margin: 0px 25px;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
`;

const Img = styled.div`
  img {
    width: 30px;
  }
`;
