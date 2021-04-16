import React from "react";
import Masonry from "react-masonry-css";
import Title from "../Title";
import "../../Global/masonry.css";
const ProfileTitles = ({ memberData }) => {
  const titles = memberData.userTitles.titles;
  const breakpointColumnsObj = {
    default: 5,
    1280: 5,
    1080: 3,
    700: 2,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {titles.map((result) => (
        <Title key={result.imdbID} result={result} />
      ))}
    </Masonry>
  );
};

export default ProfileTitles;
