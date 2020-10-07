import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { 
  Wrapper, Paragraph, Container, ImageContainer, Image, DetailsContainer,
  Heading, ListItem, Span, Button, ButtonContainer,
} from './BeerDetails.styles';
import * as actions from '../../store/actions';
import noImage from '../../assets/no-image.png';

const BeerDetails = ({ match, handleFetchBeerDetails, beer, history }) => {
  useEffect(() => {
    handleFetchBeerDetails(match.params.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imageSrc = () => {
    if(!beer.image_url) {
      return noImage;
    } else {
      return beer.image_url;
    }
  }

  let item;

  if (Object.keys(beer).length !== 0) {
    item = (
      <Container>
        <ImageContainer>
          <Image src={imageSrc()} alt={beer.name} />
        </ImageContainer>
        <DetailsContainer>
          <Heading>{beer.name}</Heading>
          <Paragraph center>{beer.tagline}</Paragraph>
          <ButtonContainer>
            <Button onClick={() => history.goBack()}>Go back</Button>
          </ButtonContainer>
          <Paragraph><Span>Description:</Span> {beer.description}</Paragraph>
          <Paragraph><Span>First brewed:</Span> {beer.first_brewed}</Paragraph>
          <Paragraph><Span>Alcohol by volume:</Span> {beer.abv}%</Paragraph>
          <Paragraph><Span>IBU:</Span> {beer.ibu}</Paragraph>
          <Paragraph><Span>Attenuation level:</Span> {beer.attenuation_level}</Paragraph>
          <Paragraph><Span>Food pairing:</Span> {beer.food_pairing.join(', ')}</Paragraph>
          <Paragraph><Span>Ingedients:</Span></Paragraph>
          <Paragraph small>Malt:</Paragraph>
          {beer.ingredients.malt.map((item, index) => (
            <ListItem key={index}>{item.name} - {item.amount.value} {item.amount.unit}</ListItem>
          ))}
          <Paragraph small>Hops:</Paragraph>
          {beer.ingredients.hops.map((item, index) => (
            <ListItem key={index}>{item.name} - {item.amount.value} {item.amount.unit}</ListItem>
          ))}
          <Paragraph><Span>Brewers tip:</Span> {beer.brewers_tips}</Paragraph>
        </DetailsContainer>
      </Container>
    )
  } else {
    item = (
      <Container>
        <Paragraph center>There is no beer selected!</Paragraph>
      </Container>
    )
  }

  return (
    <Wrapper>
      {item}
    </Wrapper>
  )
}

const mapStateToProps = state => (
  {
    beer: state.selectedBeer,
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleFetchBeerDetails: id => dispatch(actions.handleFetchBeerDetails(id))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(BeerDetails);
