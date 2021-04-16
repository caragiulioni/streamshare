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
  const [addButton, setAddButton] = useState();
  const [removeButton, setRemoveButton] = useState();
  useEffect(() => {
    console.log(found);
    if (found) {
      setAddButton(true);
      setRemoveButton(false);
    }
    if (!found) {
      setAddButton(false);
      setRemoveButton(true);
    }
  }, []);
  console.log("FOUND", found);
  console.log(currentUser);
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
        console.log(data);
        if (data.status === 200) {
          setAddButton(true);
        } else {
          return data.msg;
        }
        //returned msg for toaster
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
      <button onClick={handleAdd} disabled={addButton}>
        Add
      </button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default ActionBar;
