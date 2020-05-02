import styled from "styled-components";

export const Link = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("flex", {
      s: "1 1 50%",
      m: "1 1 50%",
      l: "1 1 50%",
      xl: "1 1 20%",
    })}
  ${(p) =>
    p.theme.responsiveStyle("max-width", {
      s: "50%",
      m: "50%",
      l: "50%",
      xl: "20%",
    })}
`;

export const LinksContainer = styled("div")`
  display: flex;
  ${(p) =>
    p.theme.responsiveStyle("flex-wrap", {
      s: "wrap",
      m: "wrap",
      l: "wrap",
      xl: "nowrap",
    })}
`;

export const LinkSurface = styled("div")`
  ${(p) => p.theme.themedColor("background-color", "surface2")}
  ${(p) => p.theme.themedColor("color", "onSurface1")}
  margin: ${(p) => `${p.theme.spacings.l}px`};
  padding: ${(p) => `${p.theme.spacings.l}px`};
`;
