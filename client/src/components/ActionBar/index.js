import React from "react";
import styled from "styled-components";
import TitleAction from "./TitleAction";
const ActionBar = ({ title, currentUser, found, setFound }) => {
  const { Title, Poster, Genre, Year, imdbID } = title;
  const handleAdd = () => {
    const title = {
      userId: currentUser.user._id,
      imdbID: imdbID,
      Title: Title,
      Poster: Poster,
      Genre: Genre,
      Year: Year,
    };
    fetch("/api/add-title", {
      method: "POST",
      body: JSON.stringify(title),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setFound(true);
        } else {
          return data.msg;
        }
      });
  };

  const handleRemove = () => {
    const toDelete = {
      userId: currentUser.user._id,
      imdbID: imdbID,
    };
    fetch("/api/remove-title", {
      method: "DELETE",
      body: JSON.stringify(toDelete),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFound(false);
      });
  };

  return (
    <Wrapper>
      {found ? (
        <TitleAction
          type={"remove"}
          action={handleRemove}
          text={"Remove from My Titles"}
        />
      ) : (
        <TitleAction
          type={"add"}
          action={handleAdd}
          text={"Add to My Titles"}
        />
      )}
    </Wrapper>
  );
};

export default ActionBar;

const Wrapper = styled.div``;
