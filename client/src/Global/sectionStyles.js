import styled from "styled-components";

export const SectionContainer = styled.section`
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 80%;

  h3 {
    font-size: 1.5em;
    color: var(--blue) !important;
    font-weight: bold;
    text-align: center;
  }

  p:first-of-type {
    margin: 5px 0px;
    text-align: center;
  }

  h4 {
    font-size: 1em;
    text-align: center;
    color: var(--orange) !important;
    margin: 10px 0px;
  }

  @media (min-width: 700px) {
    width: 30%;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  @media (min-width: 500px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
  }
`;

export const SectionMain = styled.section`
  h3 {
    text-align: center;
    margin: 15px 0px;
    font-size: 1.5em;
    color: var(--blue) !important;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
