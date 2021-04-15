import styled from "styled-components";

export const SectionContainer = styled.section`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  padding: 20px 0px;
`;
