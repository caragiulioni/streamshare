import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Title from "../Title";
import "../../Global/masonry.css";
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

  const descend = () => {
    const arr = [...titles].sort((a, b) => a.Title.localeCompare(b.Title));
    return setTitles(arr);
  };

  const ascend = () => {
    const arr = [...titles].sort((a, b) => b.Title.localeCompare(a.Title));
    return setTitles(arr);
  };

  const lastToFirst = () => {
    const arr = [...titles].reverse();
    return setTitles(arr);
  };
  const revert = () => {
    setTitles(original);
  };
  return (
    <div>
      <button onClick={descend}>Z-A</button>
      <button onClick={ascend}>A-Z</button>
      <button onClick={lastToFirst}>last added - first added</button>
      <button onClick={revert}>first added - last added</button>
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
