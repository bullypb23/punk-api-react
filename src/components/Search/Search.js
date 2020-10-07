import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Wrapper, Section, Heading, Input, Paragraph, Container, StyledLink, ItemsSection } from './Search.styles';
import * as actions from '../../store/actions';

const Search = ({ handleInputChange, handleDatabaseSearch, data, error, name }) => {
  const debouncedSave = useCallback(
		debounce((name) => handleDatabaseSearch(name), 400),
		[]
  );
  
  const handleInput = e => {
    const value = e.target.value.split(' ').join('_');
    handleInputChange(e.target.value);
    debouncedSave(value);
  }

  function debounce(func, wait, immediate) {
    var timeout;
  
    return function executedFunction() {
      var context = this;
      var args = arguments;
        
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      var callNow = immediate && !timeout;
    
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
    
      if (callNow) func.apply(context, args);
    };
  };

  let items;
  if (data.length !== 0) {
    items = data.map(beer => (
      <ItemsSection key={beer.id} id={beer.id}>
        <StyledLink to={`/beers/${beer.id}`}>{beer.name}</StyledLink>
      </ItemsSection>
    ))
  } else {
    items = <Paragraph>No data</Paragraph>
  }

  return (
    <Wrapper>
      <Section>
        <Heading>Search Database</Heading>
        <Input placeholder="Search beers..." value={name} onChange={handleInput} />
      </Section>
      <Container>
        {items}
      </Container>
    </Wrapper>
  )
};

const mapStateToProps = state => (
  {
    data: state.searchData,
    error: state.searchError,
    name: state.searchName,
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleInputChange: value => dispatch(actions.handleSearchName(value)),
    handleDatabaseSearch: value => dispatch(actions.handleDatabaseSearch(value)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
