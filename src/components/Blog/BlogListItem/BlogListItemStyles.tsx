import styled from "styled-components";

export const ContentContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px 0 ${p.theme.spacings.xl}px 0`,
      l: `0 ${p.theme.spacings.xl}px`,
    })}
`;

export const Image = styled("div")`
  ${p =>
    p.theme.responsiveStyle("height", {
      s: `150px`,
      l: `326px`,
    })}
  ${p =>
    p.theme.responsiveStyle("flex", {
      s: "0 0 100%",
      l: "0 0 646px",
    })}
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

export const OuterContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("display", {
      s: `block`,
      l: `flex`,
    })}
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.m}px 0`,
      l: `${p.theme.spacings.l}px 0`,
    })}
`;
