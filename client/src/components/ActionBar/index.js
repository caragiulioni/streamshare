import React, { useEffect } from "react";
import {
  sendUserTitle,
  receiveAddedTitle,
  receiveAddedTitleErr,
  sendAddedTitle,
} from "../../actions/actions";
import { useDispatch } from "react-redux";
const ActionBar = ({ title, currentUser }) => {
  const dispatch = useDispatch();
  const { Title, Poster, Genre, Year, imdbID } = title;
  console.log("ACTIONS CURRENTUSER", currentUser);

  //check if title is in userTutles
  let verify;
  if (currentUser) {
    const find = currentUser.user.userTitles.titles.find((title) => {
      return title === imdbID;
    });

    console.log(find);

    find === undefined ? (verify = false) : (verify = true);
  }

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
    dispatch(sendAddedTitle());
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
        console.log(data.imdbID);
        //dispatch to store
      });
  };

  const handleRemove = () => {
    console.log("remove");
  };
  return (
    <div>
      <button onClick={handleAdd} disabled={verify}>
        Add
      </button>
      <button onClick={handleRemove} disabled={!verify}>
        Remove
      </button>
    </div>
  );
};

export default ActionBar;
