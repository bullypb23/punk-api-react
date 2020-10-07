import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #40514e;
  padding: 10px 0;
  flex: 1 1 100%;
`;

export const Container = styled.div`
  flex-basis: 70%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  flex: 1 1 20%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 576px) {
    flex: 1 1 100%;
  }
`;

export const Image = styled.img`
  height: 300px;
  /* width: 100%; */
`;

export const DetailsContainer = styled.div`
  flex: 1 1 80%;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  > * {
    flex: 1 1 100%;
  }

  @media (max-width: 576px) {
    flex: 1 1 100%;
    padding: 10px;
  }
`;

export const Heading = styled.h3`
  font-size: 3rem;
  color: #40514e;

  @media (max-width: 576px) {
    text-align: center;
    font-size: 2.5rem;
  }
`;

export const ListItem = styled.p`
  font-size: 1rem;
  color: #40514e;
  padding: 10px 40px;
  flex: 1 1 100%;
`;

export const Span = styled.span`
  font-weight: bold;
`;

export const SmallParagraph = styled.p`
  font-size: 1rem;
  color: #40514e;
  padding: 10px 20px;
  flex: 1 1 100%;
`;
