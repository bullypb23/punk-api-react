import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Wrapper, Container, TableHeader, Heading, Section, NameSection, ImageSection, BrewedSection } from './Items.styles';
import * as actions from '../../store/actions';
import Item from '../Item/Item';

const Items = ({ data, dataLoaded, isLoading, error, handleFetchData, name }) => {
  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <Wrapper>
      <Container>
        <TableHeader>
          <NameSection>
            <Heading>Beer Name</Heading>
          </NameSection>
          <ImageSection>
            <Heading>Image</Heading>
          </ImageSection>
          <BrewedSection>
            <Heading>First Brewed</Heading>
          </BrewedSection>
          <Section>
            <Heading>ABV</Heading>
          </Section>
        </TableHeader>
        {dataLoaded && data
          .filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
          .map(item => (
          <Item 
            key={item.id}
            id={item.id}
            name={item.name}
            first_brewed={item.first_brewed}
            url={item.image_url}
            abv={item.abv}
          />
        ))}
      </Container>
    </Wrapper>
  )
};

const mapStateToProps = state => (
  {
    data: state.data,
    dataLoaded: state.dataLoaded,
    isLoading: state.isLoading,
    error: state.error,
    name: state.name,
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleFetchData: data => dispatch(actions.handleFetchData(data)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Items);
