import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    background: ${p => p.theme.colors.backgroundPrimary};
  }
`;
