import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Title from "../Title";
import "../../Global/masonry.css";
import SortComponent from "../Buttons/SortComponent";
const ProfileTitles = ({ memberData }) => {
  const memberTitles = memberData.userTitles.titles;
  const [titles, setTitles] = useState(memberTitles);
  const [original, setOriginal] = useState(titles);

  const breakpointColumnsObj = {
    default: 5,
    1280: 5,
    1080: 3,
    700: 2,
  };
  return (
    <div>
      <SortComponent
        titles={titles}
        setTitles={setTitles}
        original={original}
      />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {titles.map((result) => (
          <Title key={result.imdbID} result={result} />
        ))}
      </Masonry>
    </div>
  );
};

export default ProfileTitles;
