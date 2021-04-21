import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SignUp from "../SignUp";
import LogIn from "../LogIn";
import LoginBtn from "../Buttons/LoginBtn";
const ProfileHeader = ({ memberData, currentUser }) => {
  const { username, avatar } = memberData;
  const memberId = memberData._id;
  let userId;
  if (currentUser) {
    userId = currentUser.user._id;
  }
  const [following, setFollowing] = useState();
  useEffect(() => {
    if (currentUser && memberData) {
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
      <Headings>
        {!currentUser && (
          <>
            <h1>Streamshare</h1>
            <h2>What are you watching?</h2>
          </>
        )}
      </Headings>

      <ContentWrapper>
        <Left>
          <Img
            aria-hidden="true"
            style={{
              backgroundImage: `url(${avatar})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></Img>
          <Inner>
            {currentUser ? (
              <h3>
                <span>{username}'s</span> current titles
              </h3>
            ) : (
              <h3>
                <span>{username}</span>
              </h3>
            )}

            {currentUser && userId && userId !== memberId && (
              <LoginBtn
                action={handleFollow}
                text={following ? "Unfollow" : "Follow"}
              />
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
  margin: 10px 0px;
  transition: 0.3s ease-in-out;
  background-color: rgb(52, 54, 74, 0.05);
  padding: 15px 0px 10px 0px;
  a {
    font-size: 1em;
  }
  h1 {
    font-size: 1.5em;
    color: var(--blue);
    text-align: center;
  }

  h2 {
    text-align: center;
    font-size: 1em;
    margin-top: 2px;
    margin-left: 5px;
  }
  button {
    font-size: 0.8em;
    width: 70px;
    margin-left: 5px;
    padding: 5px;
  }
  @media (min-width: 1080px) {
    padding: 20px 0px 15px 0px;
    button {
      width: 85px;
      font-size: 1em;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px;

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
  h3 {
    margin-left: 10px;
    font-size: 1.5em;
    font-weight: bold;
  }

  span {
    color: var(--orange);
  }

  button {
    margin-left: 10px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
`;

const Img = styled.div`
  border: 2px solid var(--blue);
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const Headings = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 10px;
`;
