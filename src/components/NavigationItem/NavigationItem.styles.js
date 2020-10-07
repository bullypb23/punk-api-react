import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.li`
  flex-basis: auto;
  height: 100%;
`;

export const StyledLink = styled(NavLink)`
  height: 100%;
  padding: 0 10px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-size: 1.2rem;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    bottom: 0;
    transition: all 0.2s ease-in;
  }
  
  &:hover {

    &:after {
      width: 100%;
    }
  }
`;