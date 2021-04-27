import React from "react";
import { SectionContainer } from "../../Global/sectionStyles";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Error = () => {
  return (
    <Wrapper>
      <SectionContainer>
        <h3>Error</h3>
        <p>
          We couldn't find that user.
          <Link to="/search">Try doing a search instead</Link>
        </p>
      </SectionContainer>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  a {
    margin-left: 5px;
    color: var(--orange);
  }
`;
