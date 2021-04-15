import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import kitten from "../../assets/kitten.jpg";
import ActionBar from "../ActionBar";
const Title = ({ result }) => {
  let history = useHistory();
  let titleId = result.imdbID;

  const addDefaultSrc = (ev) => {
    ev.target.src = kitten;
  };

  const handleTitleClick = () => {
    history.push(`title/${titleId}`);
  };
  const { Title, Poster, Year, Type } = result;
  return (
    <TitleContainer>
      <ItemLink onClick={handleTitleClick}>
        <h4>{Title}</h4>
        <Details>
          <p>{Year}</p>
          <p>{Type}</p>
        </Details>
        <img onError={addDefaultSrc} src={Poster} alt={Title} />
      </ItemLink>
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

const ItemLink = styled.div``;

const Details = styled.div`
  display: flex;
`;
