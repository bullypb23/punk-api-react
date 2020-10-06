import React from 'react';
import { Container, StyledLink } from './NavigationItem.styles';

const NavigationItem = ({ link, children }) => {
  return (
    <Container>
      <StyledLink to={link}>{children}</StyledLink>
    </Container>
  )
}

export default NavigationItem;
