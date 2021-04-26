import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { RiPlayListAddLine, RiUserShared2Line } from "react-icons/ri";
const Details = () => {
  return (
    <Wrapper>
      <Heading>
        <p>Search movies, TV and video games</p>
        <Icon>
          <FiSearch />
        </Icon>
      </Heading>
      <Heading>
        <p>Add titles to your lists</p>
        <Icon>
          <RiPlayListAddLine />
        </Icon>
      </Heading>
      <Heading>
        <p>Follow friends and discover new titles</p>
        <Icon>
          <RiUserShared2Line />
        </Icon>
      </Heading>
    </Wrapper>
  );
};

export default Details;

const Wrapper = styled.div`
  margin: 10px 0px;
`;

const Heading = styled.div`
  margin: 6px 0px;
  display: flex;
  justify-content: center;
  p {
    font-size: 0.9em;
    color: grey;
  }
  svg {
    font-size: 1.1em;
    color: var(--orange);
  }
`;

const Icon = styled.div`
  svg {
    padding-left: 5px;
    margin-top: -2px;
  }
`;
