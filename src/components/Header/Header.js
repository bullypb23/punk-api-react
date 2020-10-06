import React from 'react';
import { Wrapper, Logo, Image, StyledLink } from './Header.styles';
import logo from '../../assets/logo.png';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <StyledLink to="/">
          <Image src={logo} alt="Logo" />
        </StyledLink>
      </Logo>
      <Navigation />
    </Wrapper>
  )
}

export default Header;
