import React, { Component } from "react";
import { Wrapper, Heading, Paragraph, StyledLink } from './ErrorBoundary.styles';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <Heading>Something went wrong!</Heading>
          <Paragraph>There was an error with this listing. <StyledLink to="/">Click here</StyledLink>{" "}
          to go back to the home page.</Paragraph>
        </Wrapper>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;