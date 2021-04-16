import React, { useEffect, useState } from "react";
import {
  sendUserTitle,
  receiveAddedTitle,
  receiveAddedTitleErr,
  sendAddedTitle,
  receiveUserDataErr,
} from "../../actions/actions";
import { useDispatch } from "react-redux";
const ActionBar = ({ title, currentUser, found }) => {
  const dispatch = useDispatch();
  const { Title, Poster, Genre, Year, imdbID } = title;
  // console.log("ACTIONS CURRENTUSER", currentUser);
  // useEffect(() => {
  //   //check if title is in userTitles to set button state
  //   // if (currentUser) {
  //   //   const find = currentUser.user.userTitles.titles.find((title) => {
  //   //     return title.imdbID === imdbID;
  //   //   });
  //   //   if (find) {
  //   //     setFound(true);
  //   //   } else {
  //   //     setFound(false);
  //   //   }
  //   // }
  // }, [currentUser]);

  const date = new Date();
  const time = date.getTime();
  const handleAdd = () => {
    const title = {
      userId: currentUser.user._id,
      imdbID: imdbID,
      Title: Title,
      Poster: Poster,
      Genre: Genre,
      Year: Year,
    };
    fetch("/add-title", {
      method: "POST",
      body: JSON.stringify(title),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //returned msg for toaster
        return data.msg;
      });
  };

  const handleRemove = () => {
    const toDelete = {
      userId: currentUser.user._id,
      imdbID: imdbID,
    };
    fetch("/remove-title", {
      method: "DELETE",
      body: JSON.stringify(toDelete),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //returned msg for toaster
        console.log("ACTIONS RETURNED DATA", data.msg);
      });
  };
  return (
    <div>
      <button onClick={handleAdd} disabled={found}>
        Add
      </button>
      <button onClick={handleRemove} disabled={!found}>
        Remove
      </button>
    </div>
  );
};

export default ActionBar;
