import React, { useState, useEffect } from "react";
import { SectionMain } from "../../Global/sectionStyles";
import Masonry from "react-masonry-css";
import Title from "../Title";
import styled from "styled-components";
import Spinner from "../Spinner";
const Popular = () => {
  const [response, setResponse] = useState();
  const [titles, setTitles] = useState();
  useEffect(() => {
    fetch("/popular")
      .then((res) => res.json())
      .then((data) => {
        setTitles(data.popularTitles);
        setResponse(true);
      });
  }, []);
  const breakpointColumnsObj = {
    default: 5,
    1280: 5,
    1080: 3,
    700: 2,
  };

  return (
    <Wrapper>
      <SectionMain>
        <h3>Popular</h3>
        <h4>Stream share members recently added:</h4>
        {response === true ? (
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
          <Spinner />
        )}
      </SectionMain>
    </Wrapper>
  );
};

export default Popular;

const Wrapper = styled.div`
  h4 {
    text-align: center;
    margin: 10px 0px;
  }
`;
