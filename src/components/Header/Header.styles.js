import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 30px;
  background-color: #2f89fc;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 576px) {
    padding: 0 10px;
  }
`;

export const Logo = styled.div`
  flex: 1 1 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledLink = styled(Link)`
  flex: 1 1 100%;
  height: 100%;
  padding: 5px;
`;

export const Image = styled.img`
  height: 100%;
`;