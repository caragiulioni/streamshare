import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
const UserSearchBar = ({ options }) => {
  const [userDisplay, setUserDisplay] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const [selectionIndex, setSelectionIndex] = useState(0);
  const [hover, setHover] = useState(undefined);
  const wrapperRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);
  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setUserDisplay(false);
      setUserSearch("");
    }
  };
  let history = useHistory();

  const setItem = (item) => {
    setUserSearch(item);
    setUserDisplay(false);
  };

  const handleRoute = (name) => {
    history.push(`/sh/${name}`);
  };

  const matches = options.filter((option) => {
    return (
      userSearch.length > 0 &&
      option.username.toLowerCase().includes(userSearch.toLowerCase())
    );
  });
  return (
    <Wrapper ref={wrapperRef}>
      <h4>Member Search</h4>
      <input
        placeholder="ex. eleven or mugatu"
        value={userSearch}
        type="text"
        onClick={() => setUserDisplay(!userDisplay)}
        onChange={(event) => setUserSearch(event.target.value)}
        onKeyDown={(event) => {
          switch (event.key) {
            case "Enter": {
              matches.filter((option, idx) => {
                if (idx === selectionIndex) {
                  return handleRoute(option.username);
                }
              });

              return;
            }
            case "ArrowUp": {
              if (selectionIndex > 0) {
                setSelectionIndex(selectionIndex - 1);
              }
              return;
            }
            case "ArrowDown": {
              if (selectionIndex < matches.length - 1) {
                setSelectionIndex(selectionIndex + 1);
              }
              return;
            }
          }
        }}
      />
      {userDisplay && (
        <div>
          {matches.map((option, idx) => {
            const isSelected = idx === selectionIndex || option === hover;
            return (
              <Link key={option.username} to={`/sh/${option.username}`}>
                <Match
                  style={{
                    background: isSelected ? "#66D1AB" : "grey",
                  }}
                  onMouseEnter={() => setHover(option)}
                  onMouseLeave={() => setHover(undefined)}
                  tabIndex={0}
                  onClick={() => setItem(option.username)}
                >
                  <p>{option.username}</p>
                  <Img
                    aria-hidden="true"
                    style={{
                      backgroundImage: `url(${option.avatar})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Img>
                </Match>
              </Link>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
};

export default UserSearchBar;

const Wrapper = styled.div`
  input {
    display: flex;
    width: 150px;
    margin: 0 auto;
  }
  h4 {
    text-align: center;
    color: var(--orange);
    margin: 5px 0px;
  }
  p {
    text-align: center;
    color: lightgray;
  }
`;

const Matches = styled.div``;

const Match = styled.div`
  padding: 5px;
  width: 150px;
  margin: 3px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--blue);
  p {
    margin: 0px 4px;
    color: var(--offwhite);
    font-weight: bold;
  }
`;

const Img = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
