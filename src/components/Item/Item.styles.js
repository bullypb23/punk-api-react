import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #40514e;
  border-top: none;
`;

export const Section = styled.div`
  flex: 1 1 40%;
`;

export const ImageContainer = styled.div`
  flex: 1 1 20%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  height: 50px;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #40514e;
  padding: 10px 0;

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

export const Container = styled.div`
  flex: 1 1 20%;
  display: flex;
  justify-content: center;
`;
