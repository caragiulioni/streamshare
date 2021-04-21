import React from "react";
import styled from "styled-components";
import { SectionContainer } from "../../Global/sectionStyles";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <SectionContainer>
        <Heading>
          <h3>Error</h3>
          <BiError size={25} />
        </Heading>
        <p>
          Hmmmm...something isn't right, try refreshing the page or
          <Link to="/">head back to home</Link>
        </p>
      </SectionContainer>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  h3 {
    font-size: 2em;
    color: var(--blue);
  }
  p {
    padding: 10px 25px;
  }
  a {
    padding-left: 5px;
    color: var(--orange);
  }
`;

const Heading = styled.div`
  display: flex;

  svg {
    color: var(--blue);
    margin-top: 5px;
  }

  @media (min-width: 700px) {
    svg {
      margin-top: 0px;
    }
  }
`;
