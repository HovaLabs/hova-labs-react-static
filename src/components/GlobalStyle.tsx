import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

  html {
    background: ${p => p.theme.colors.background};
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  body{
    ${p => p.theme.typography.bodyText}
  }

  a {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

`;
