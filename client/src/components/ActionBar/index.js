import React, { useEffect } from "react";
import {
  sendUserTitle,
  receiveAddedTitle,
  receiveAddedTitleErr,
  sendAddedTitle,
  receiveUserDataErr,
} from "../../actions/actions";
import { useDispatch } from "react-redux";
const ActionBar = ({ title, currentUser }) => {
  const dispatch = useDispatch();
  const { Title, Poster, Genre, Year, imdbID } = title;
  console.log("ACTIONS CURRENTUSER", currentUser);

  //check if title is in userTutles
  let found;
  if (currentUser) {
    const find = currentUser.user.userTitles.titles.find((title) => {
      console.log(title, imdbID);
      return title.imdbID === imdbID;
    });
    console.log(find);
    if (find) {
      found = true;
    } else {
      found = false;
    }
  }
  console.log("FOUND", found);
  const date = new Date();
  const time = date.getTime();
  const handleAdd = () => {
    const title = {
      added: time,
      userId: currentUser.user._id,
      imdbID: imdbID,
      Title: Title,
      Poster: Poster,
      Genre: Genre,
      Year: Year,
    };
    // dispatch(sendAddedTitle());
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
        console.log(data);
        // dispatch(receiveAddedTitle(data));
      });
  };

  const handleRemove = () => {
    console.log("remove");
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
