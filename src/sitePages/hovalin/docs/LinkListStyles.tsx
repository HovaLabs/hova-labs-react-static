import styled from "styled-components";

export const Link = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("flex", {
      s: "1 1 50%",
      m: "1 1 50%",
      l: "1 1 20%",
    })}
`;

export const LinksContainer = styled("div")`
  display: flex;
  ${(p) =>
    p.theme.responsiveStyle("flex-wrap", {
      s: "wrap",
      m: "wrap",
      l: "nowrap",
    })}
`;

export const LinkSurface = styled("div")`
  color: ${(p) => p.theme.colors.onSurface1};
  padding: ${(p) => `${p.theme.spacings.l}px`};
`;
