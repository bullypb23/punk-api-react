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

  ${props => props.small && 'font-size: 1rem; padding: 20px;'};
  
  @media (max-width: 576px) {
    ${props => props.center && 'text-align: center;'};
  }
`;

export const Container = styled.div`
  flex-basis: 70%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`;

export const ImageContainer = styled.div`
  flex: 1 1 20%;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media (max-width: 576px) {
    flex: 1 1 100%;
  }
`;

export const Image = styled.img`
  max-width: 100%;

  @media (max-width: 576px) {
    height: 300px;
  }
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

export const Button = styled.button`
  color: #fff;
  background-color: #2f89fc;
  padding: 10px 15px;
  width: auto;
  border: none;
  outline: none;
  margin: 10px 0;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  flex: 1 1 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;
