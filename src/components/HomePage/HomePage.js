import React from 'react';
import { connect } from 'react-redux';
import { Wrapper, Section, Heading, Input } from './HomePage.styles';
import * as actions from '../../store/actions';
import Items from '../Items/Items';

const HomePage = ({ handleInputChange }) => (
  <Wrapper>
    <Section>
      <Heading>Beer API</Heading>
      <Input placeholder="Search beers..." onChange={(e) => handleInputChange(e.target.value)} />
    </Section>
    <Items />
  </Wrapper>
);

const mapStateToProps = state => (
  {}
);

const mapDispatchToProps = dispatch => (
  {
    handleInputChange: value => dispatch(actions.handleInputChange(value)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
