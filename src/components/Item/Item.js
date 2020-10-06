import React from 'react';
import { Wrapper, Image, Paragraph, Section, ImageContainer, Container } from './Item.styles';

const Item = ({ url, name, first_brewed, id, abv }) => {
  return (
    <Wrapper>
      <Section>
        <Paragraph>{name}</Paragraph>
      </Section>
      <ImageContainer>
        <Image src={url} alt={name} />
      </ImageContainer>
      <Container>
        <Paragraph>{first_brewed}</Paragraph>
      </Container>
      <Container>
        <Paragraph>{abv}</Paragraph>
      </Container>
    </Wrapper>
  )
}

export default Item;
