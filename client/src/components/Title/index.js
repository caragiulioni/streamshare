import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import kitten from "../../assets/kitten.jpg";

const Title = ({ result }) => {
  let titleId = result.imdbID;
  const addDefaultSrc = (ev) => {
    ev.target.src = kitten;
  };

  const { Title, Poster, Year, Genre } = result;
  return (
    <TitleContainer>
      <Link to={`/title/${titleId}`}>
        <h4>{Title}</h4>
        <Details>
          <p>
            <span>{Genre}</span>
          </p>
        </Details>
        <img onError={addDefaultSrc} src={Poster} alt={Title} />
      </Link>
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.div`
  transition: 0.3s ease-in-out;
  opacity: 1;
  a {
    font-weight: bold;
  }

  h4 {
    font-size: 1.2em;
    color: var(--darkgrey);
  }

  span {
    color: var(--orange);
  }

  p {
    font-size: 0.8em;
    margin: 5px 0px;
    font-weight: 200;
  }
  img {
    width: 100%;
  }
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

const Details = styled.div`
  display: flex;
`;
