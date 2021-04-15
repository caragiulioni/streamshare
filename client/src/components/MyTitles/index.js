import React, { useEffect, useState, useParams } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { SectionContainer } from "../../Global/sectionStyles";
import TitlesWelcome from "./TitlesWelcome";
import Masonry from "react-masonry-css";
import Title from "../Title";
import "../../Global/masonry.css";

const MyTitles = () => {
  const currentUser = useSelector((state) => state.user.currentUser.user);
  const [titles, setTitles] = useState(null);
  const [response, setResponse] = useState(null);
  const userId = currentUser._id;
  console.log(userId);
  useEffect(() => {
    setResponse("loading");
    if (currentUser) {
      fetch(`/titles/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setTitles(data.data.titles);
          setResponse("true");
        });
    }
  }, [currentUser, setTitles]);

  const breakpointColumnsObj = {
    default: 4,
    1280: 4,
    1080: 2,
    700: 1,
  };

  console.log(titles);

  return response === "true" ? (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {titles.map((result) => (
        <Title key={result.imdbID} result={result} />
      ))}
    </Masonry>
  ) : (
    <SectionContainer>
      <TitlesWelcome currentUser={currentUser} />
    </SectionContainer>
  );
};

export default MyTitles;
