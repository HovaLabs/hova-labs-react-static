import styled from "styled-components";

// MAILING LIST
export const Input = styled("input")`
  ${(p) => p.theme.typography.bodyText};
  min-width: 0;
  ${(p) => p.theme.themedColor("background", "surface1")}
  border: 3px solid transparent;
  ${(p) => p.theme.themedColor("border-color", "onSurface1")}
  ${(p) => p.theme.themedColor("color", "onSurface1")}
  display: inline;
  ${(p) =>
    p.theme.responsiveStyle("margin-bottom", {
      s: `${p.theme.spacings.l}px`,
      m: `${p.theme.spacings.l}px`,
      l: 0,
      xl: 0,
    })}
  ${(p) =>
    p.theme.responsiveStyle("flex-basis", {
      s: "100%",
      m: "100%",
      l: "25%",
      xl: "25%",
    })}
  ${(p) =>
    p.theme.responsiveStyle("margin-right", {
      s: 0,
      m: 0,
      l: `${p.theme.spacings.l}px`,
      xl: `${p.theme.spacings.l}px`,
    })}
  padding: ${(p) => `${p.theme.spacings.m}px`};
  width: 100%;
  max-width: 400px;
`;

export const InputsArea = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("display", {
      s: "block",
      l: "flex",
    })}
  margin-top: ${(p) => `${p.theme.spacings.m}px`};
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.m}px 0`,
      l: "0",
    })}
  justify-content: flex-start;
`;

export const StatusArea = styled("div")`
  display: flex;
  flex-basis: 100%;
  margin-top: ${(p) => `${p.theme.spacings.l}px`};
  & > div > a {
    ${(p) => p.theme.themedColor("color", "primary")}
  }
`;
