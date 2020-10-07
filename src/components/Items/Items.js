import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { 
  Wrapper, Container, TableHeader, Heading, Section, NameSection, PaginationContainer,
  ImageSection, BrewedSection, TableFooter, Select, Option, SelectContainer, ParagraphContainer,
} from './Items.styles';
import * as actions from '../../store/actions';
import Item from '../Item/Item';
import Pagination from 'react-js-pagination';

const Items = ({ 
  data, dataLoaded, isLoading, error, handleFetchData, name, handleMaxItems,
  itemsPerPage, page, handlePageChange,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [range, setRange] = useState([5, 10, 20, 50]);

  useEffect(() => {
    handleFetchData(page, itemsPerPage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxItemsHandler = value => {
    handleMaxItems(value);
    handleFetchData(page, value);
  }

  const pageChangeHandler = value => {
    handlePageChange(value);
    handleFetchData(value, itemsPerPage);
  }

  return (
    <Wrapper>
      <Container>
        <TableHeader>
          <NameSection>
            <Heading>Beer Name</Heading>
          </NameSection>
          <ImageSection>
            <Heading center>Image</Heading>
          </ImageSection>
          <BrewedSection>
            <Heading center>First Brewed</Heading>
          </BrewedSection>
          <Section>
            <Heading center>ABV</Heading>
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
        <TableFooter>
          <ParagraphContainer>
            <Heading>Beers per Page</Heading>
          </ParagraphContainer>
          <SelectContainer>
            <Select value={itemsPerPage} onChange={e => maxItemsHandler(e.target.value)}>
              {range.map(value => (
                <Option key={value} value={value}>{value}</Option>
              ))}
            </Select>
          </SelectContainer>
        </TableFooter>
        <PaginationContainer>
          <Pagination
            activePage={page}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={325}
            pageRangeDisplayed={5}
            onChange={pageChangeHandler}
            prevPageText={"prev"}
            nextPageText={"next"}
          />
        </PaginationContainer>
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
    itemsPerPage: state.itemsPerPage,
    page: state.page,
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleFetchData: (page, items) => dispatch(actions.handleFetchData(page, items)),
    handleMaxItems: value => dispatch(actions.handleMaxItems(value)),
    handlePageChange: value => dispatch(actions.handlePageChange(value)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Items);
