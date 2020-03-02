import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  html {
    background: ${p => p.theme.colors.background};
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  body{
    font-family: 'Roboto', sans-serif;
    ${p => p.theme.typography.bodyText}
  }

  a {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

`;
