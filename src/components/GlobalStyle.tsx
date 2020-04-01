import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    background: ${(p) => {
      return p.theme.colors.background;
    }};
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    transition: color 300ms;
    transition: background-color 500ms;
  }

  body{
    ${(p) => p.theme.typography.bodyText}
  }

  a {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  ul {
    padding-inline-start: 20px;
  }

`;
