import styled from "styled-components";
import { Button as BBButton } from "@hova-labs/bento-box-web";

export const Button = styled(BBButton)`
  margin-top: ${p => `${p.theme.spacings.l}px`};
  margin-bottom: ${p => `${p.theme.spacings.l}px`};
`;

export const Description = styled("div")`
  ${p =>
    p.theme.responsiveStyle("padding-top", {
      s: `${p.theme.spacings.l}px`,
      l: `0`,
    })}
`;

export const ContentContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px 0 ${p.theme.spacings.xl}px 0`,
      l: `0 ${p.theme.spacings.xl}px`,
    })}
`;

export const Image = styled("div")<{ backgroundImage: string }>`
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
  ${p =>
    p.theme.responsiveStyle("margin-bottom", {
      s: `${p.theme.spacings.l}px`,
      xl: `0`,
    })}
  background-color: ${p => p.theme.colors.surface1};
  background-image: url(${p => p.backgroundImage});
  background-position: center;
  background-size: cover;
`;

export const OuterContainer = styled("div")`
  background: ${p => p.theme.colors.surface2};
  ${p =>
    p.theme.responsiveStyle("display", {
      s: `block`,
      xl: `flex`,
    })}
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
`;
