import styled from "styled-components";

export const Link = styled("div")`
  background-color: ${p => p.theme.colors.surface2};
  padding: ${p => `${p.theme.spacings.l}px`};
  ${p =>
    p.theme.responsiveStyle("flex-basis", {
      s: `50%`,
      m: `50%`,
      l: `20%`,
    })}
`;

export const LinksContainer = styled("div")`
  display: flex;
  ${p =>
    p.theme.responsiveStyle("flex-wrap", {
      s: "wrap",
      m: "wrap",
      l: "nowrap",
    })}
`;

export const LinkText = styled("a")`
  color: ${p => p.theme.colors.onSurface2};
`;
