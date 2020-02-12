import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    background: ${p => p.theme.colors.background};
  }

  a {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
