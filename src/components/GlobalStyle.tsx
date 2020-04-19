import React from "react";
import { createGlobalStyle, useTheme, ThemeProvider } from "styled-components";

interface GlobalStyleProps {
  readonly initialized?: boolean;
}

const GlobalStyleInstance = createGlobalStyle<GlobalStyleProps>`
  html {
    ${(p) => p.theme.themedColor("background", "background")}
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
    ${(p) => p.theme.themedColor("color", "primary")}
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  ul {
    padding-inline-start: 20px;
  }
`;

export const GlobalStyle: React.FC = () => {
  return <GlobalStyleInstance />;
};
