import React, { useEffect, useState } from "react";
import LoginBtn from "../Buttons/LoginBtn";
import styled from "styled-components";
const ActionBar = ({ title, currentUser, found, setFound }) => {
  const [isFound, setIsFound] = useState();
  const { Title, Poster, Genre, Year, imdbID } = title;
  const [addButton, setAddButton] = useState();
  const [removeButton, setRemoveButton] = useState();
  useEffect(() => {
    if (found) {
      setAddButton(true);
      setRemoveButton(false);
    }
    if (!found) {
      setAddButton(false);
      setRemoveButton(true);
    }
  }, [found]);

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
          setRemoveButton(false);
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
        setAddButton(false);
        setRemoveButton(true);
      });
  };

  return (
    <Wrapper>
      <LoginBtn action={handleAdd} text={"Add"} disabled={addButton} />
      <LoginBtn action={handleRemove} text={"Remove"} disabled={removeButton} />
    </Wrapper>
  );
};

export default ActionBar;

const Wrapper = styled.div`
  button {
    margin: 5px 10px;
    background-color: var(--blue);
  }

  button:last-of-type {
    margin-left: 0px;
  }
`;
