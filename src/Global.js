import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  body {
    max-width: 100vw;
  }
`;

export default Global;
