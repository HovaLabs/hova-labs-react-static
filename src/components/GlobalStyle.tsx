import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  readonly initialized?: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  :root {
    ${(p) =>
      p.initialized
        ? `--hova-labs-on-background: ${p.theme.colors.onBackgroundRaw};`
        : ""}
    ${(p) =>
      p.initialized
        ? `--hova-labs-on-surface-1: ${p.theme.colors.onSurface1Raw};`
        : ""}
    ${(p) =>
      p.initialized
        ? `--hova-labs-on-surface-2: ${p.theme.colors.onSurface2Raw};`
        : ""}
    ${(p) =>
      p.initialized
        ? `--hova-labs-on-primary: ${p.theme.colors.onPrimaryRaw};`
        : ""}
    ${(p) =>
      p.initialized
        ? `--hova-labs-on-secondary: ${p.theme.colors.onSecondaryRaw};`
        : ""}
    ${(p) =>
      p.initialized
        ? `--hova-labs-background: ${p.theme.colors.backgroundRaw};`
        : ""}
    ${(p) =>
      p.initialized
        ? `--hova-labs-surface-1: ${p.theme.colors.surface1Raw};`
        : ""}
    ${(p) =>
      p.initialized
        ? `--hova-labs-surface-2: ${p.theme.colors.surface2Raw};`
        : ""}
    ${(p) =>
      p.initialized ? `--hova-labs-primary: ${p.theme.colors.primaryRaw};` : ""}
    ${(p) =>
      p.initialized
        ? `--hova-labs-secondary: ${p.theme.colors.secondaryRaw};`
        : ""}
  }

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
    color: ${(p) => p.theme.colors.primary};
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  ul {
    padding-inline-start: 20px;
  }

`;
