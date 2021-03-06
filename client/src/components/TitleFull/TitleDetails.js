import React from "react";
import styled from "styled-components";
import ActionBar from "../ActionBar";
import { useSelector } from "react-redux";
import kitten from "../../assets/kitten.jpg";
const TitleDetails = ({ title, found, setFound }) => {
  const { Title, Poster, imdbRating, Genre, Plot, Year, Rated } = title;
  const currentUser = useSelector((state) => state.user.currentUser);
  const addDefaultSrc = (ev) => {
    ev.target.src = kitten;
  };
  return (
    <DetailsWrapper>
      <InnerWrapper>
        <h3>{Title}</h3>
        <img onError={addDefaultSrc} src={Poster} alt={Title} />
      </InnerWrapper>
      <InnerDetailsWrapper>
        <Details>
          <p>
            Score: <span>{imdbRating}</span>
          </p>
          <p>Year: {Year}</p>
          <p>
            Rated: <span>{Rated}</span>
          </p>
        </Details>
        <PlotWrapper>
          <span>Plot:</span>
          <p>{Plot}</p>
        </PlotWrapper>
        <Details>
          <p>
            <span>{Genre}</span>
          </p>
        </Details>
        <ActionBar
          currentUser={currentUser}
          title={title}
          setFound={setFound}
          found={found}
        />
      </InnerDetailsWrapper>
    </DetailsWrapper>
  );
};

export default TitleDetails;

const DetailsWrapper = styled.div`
  margin: 10px 0px;
  padding: 10px;
  padding-bottom: 80px;
  background-color: var(--cleargrey);

  p {
    display: flex;
    color: var(--darkgrey);
  }
  img {
    width: 100%;
  }
  span {
    margin-left: 5px;
    color: var(--orange);
  }

  h3 {
    font-size: 1.2em;
    font-weight: bold;
    margin: 15px 0px 10px 0px;
    color: var(--darkgrey);
  }

  @media (min-width: 700px) {
    display: flex;
    width: 60%;
    margin: 20px auto;
    padding: 20px;
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
    margin-top: 45px;
  }
`;
const Details = styled.div`
  padding: 0px 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  p {
    margin: 5px 0px;
  }

  span {
    padding: 0;
  }

  @media (min-width: 700px) {
    padding: 0px 10px;
  }
  span {
    display: block;
  }
`;

const PlotWrapper = styled.div`
  margin: 10px 0px;
  padding: 0px 5px;
  span {
    margin: 0;
    color: var(orange);
  }

  p {
    margin-top: 5px;
  }

  @media (min-width: 700px) {
    padding: 0px 10px;
  }
`;
