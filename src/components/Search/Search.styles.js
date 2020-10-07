import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 4rem;
  color: #40514e;
  padding: 10px 0;
  text-align: center;
`;

export const Input = styled.input`
  width: 30%;
  padding: 10px 15px;
  border: none;
  border-bottom: 1px solid #40514e;
  outline: none;
  text-align: center;
  font-size: 1.2rem;
  transition: 0.2s all;
  
  &:focus {
    border-bottom: 2px solid #576d69;
  }

  @media (max-width: 768px) {
    width: 40%;
  }

  
  @media (max-width: 576px) {
    width: 80%;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #40514e;
  padding: 10px 0;
  flex: 1 1 100%;
  text-align: center;
`;

export const Container = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const ItemsSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: #40514e;
  padding: 10px 0;
  flex: 1 1 100%;
  text-align: center;
  cursor: pointer;
`;
