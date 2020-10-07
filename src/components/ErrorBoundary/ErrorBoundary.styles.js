import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Heading = styled.h1`
  color: #fff;
  font-size: 3rem;
  padding: 10px 0;
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 1.5rem;
`;

export const StyledLink = styled(Link)`
  color: #40514e;
`;
