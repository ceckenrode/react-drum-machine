import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100%;
  padding-top: 50px;
`;

export const DrumWrapper = styled.div`
  width: 40vw;
  margin: 0 auto;
  background: #3C333E;
  border-radius: 5px;
  &::after {
    display: block;
    content: "";
    clear: both;
  }

  @media(max-width: 1100px) {
    width: 50vw;
  }

  @media(max-width: 800px) {
    width: 70vw;
  }
  
  @media(max-width: 500px) {
    width: 90vw;
  }
`;
