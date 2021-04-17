import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import kitten from "../../assets/kitten.jpg";

const Title = ({ result }) => {
  // let history = useHistory();
  let titleId = result.imdbID;
  const addDefaultSrc = (ev) => {
    ev.target.src = kitten;
  };

  const handleTitleClick = () => {
    // history.push(`title/${titleId}`);
  };
  const { Title, Poster, Year, Genre } = result;
  return (
    <TitleContainer>
      <Link to={`title/${titleId}`}>
        <h4>{Title}</h4>
        <Details>
          <p>{Genre}</p>
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
  img {
    width: 100%;
  }
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Details = styled.div`
  display: flex;
`;
