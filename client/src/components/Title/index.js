import React from "react";
import styled from "styled-components";
import kitten from "../../assets/kitten.jpg";
const Title = ({ result }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = kitten;
  };
  const { Title, Poster, Year, Type } = result;
  return (
    <TitleContainer>
      <h4>{Title}</h4>
      <div>
        <p>{Year}</p>
        <p>{Type}</p>
      </div>
      <img onError={addDefaultSrc} src={Poster} alt={Title} />
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.div`
  img {
    width: 100%;
  }

  div {
    display: flex;
  }
`;
