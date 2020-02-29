import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    background: ${p => p.theme.colors.background};
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

  * {
    box-sizing: border-box;
  }
`;
