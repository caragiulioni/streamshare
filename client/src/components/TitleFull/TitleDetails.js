import React from "react";
import styled from "styled-components";
import ActionBar from "../ActionBar";
import { useSelector } from "react-redux";
const TitleDetails = ({ title, found }) => {
  const { Title, Poster, imdbRating, Genre, Plot, Year, Rated } = title;
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <DetailsWrapper>
      <InnerWrapper>
        <h2>{Title}</h2>
        <img src={Poster} alt={Title} />
      </InnerWrapper>
      <InnerDetailsWrapper>
        <Details>
          <p>
            <span>****</span>
            {imdbRating}
          </p>
          <p>
            <span>Year: </span> {Year}
          </p>
          <p>Rated: {Rated}</p>
        </Details>
        <PlotWrapper>
          <span>Plot:</span>
          <p>{Plot}</p>
        </PlotWrapper>
        <Details>
          <p>
            <span>Genre: </span> {Genre}
          </p>
        </Details>
        <ActionBar currentUser={currentUser} title={title} found={found} />
      </InnerDetailsWrapper>
    </DetailsWrapper>
  );
};

export default TitleDetails;

const DetailsWrapper = styled.div`
  padding-bottom: 60px;

  p {
    display: flex;
  }
  img {
    width: 100%;
  }

  @media (min-width: 700px) {
    display: flex;
    width: 60%;
    margin: 0 auto;
  }
`;

const InnerWrapper = styled.div`
  @media (min-width: 700px) {
    width: 50%;
  }
`;

const InnerDetailsWrapper = styled.div`
  @media (min-width: 700px) {
    width: 50%;
  }
`;
const Details = styled.div`
  padding: 0px 5px;
  display: flex;
  justify-content: space-between;

  /* p:nth-child(3) {
    color: orange;
  } */

  @media (min-width: 700px) {
    padding: 0px 10px;
  }
  span {
    display: block;
  }
`;

const PlotWrapper = styled.div`
  padding: 0px 5px;
  p {
    display: flex;
  }

  @media (min-width: 700px) {
    padding: 0px 10px;
  }
`;
