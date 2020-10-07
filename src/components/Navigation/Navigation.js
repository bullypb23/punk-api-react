import React from 'react';
import { Wrapper, Nav, ListContainer } from './Navigation.styles';
import NavigationItem from '../NavigationItem/NavigationItem';

const Navigation = () => {
  return (
    <Wrapper>
      <Nav>
        <ListContainer>
          <NavigationItem link="/">Home</NavigationItem>
          <NavigationItem link="/beers">Search</NavigationItem>
        </ListContainer>
      </Nav>
    </Wrapper>
  )
}

export default Navigation;
