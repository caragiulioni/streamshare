import React from "react";
import Masonry from "react-masonry-css";
import Title from "../Title";
import "../../Global/masonry.css";
const ProfileTitles = ({ memberData }) => {
  const titles = memberData.userTitles.titles;
  const breakpointColumnsObj = {
    default: 4,
    1280: 4,
    1080: 2,
    700: 1,
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
