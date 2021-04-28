import React, { useState, useEffect } from "react";
import { SectionMain } from "../../Global/sectionStyles";
import Masonry from "react-masonry-css";
import Title from "../Title";
import styled from "styled-components";
import Spinner from "../Spinner";
import FilterBar from "../FilterBar";
const Popular = () => {
  const [response, setResponse] = useState();
  const [titles, setTitles] = useState();
  const [value, setValue] = useState("");
  useEffect(() => {
    fetch("/api/popular")
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
        <h4>Streamshare members recently added:</h4>
        <Action>
          <FilterBar value={value} setValue={setValue} />
        </Action>
        {response === true ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {titles
              .filter((result) => {
                if (!value) return true;
                if (result.Genre.toLowerCase().includes(value.toLowerCase())) {
                  return true;
                }
                return false;
              })
              .map((result) => (
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
  h4:nth-child(2) {
    text-align: center;
    margin: 10px 0px 20px 0px;
  }
`;

const Action = styled.div`
  margin: 5px 0px 10px;
`;
