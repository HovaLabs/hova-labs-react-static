import styled from "styled-components";
import { Button as BBButton } from "../..";

export const Button = styled(BBButton)`
  ${(p) => p.theme.themedColor("color", "onPrimary")}
  margin-top: ${(p) => `${p.theme.spacings.l}px`};
  margin-bottom: ${(p) => `${p.theme.spacings.l}px`};
`;

export const Description = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("padding-top", {
      s: `${p.theme.spacings.l}px`,
      l: "0",
    })}
`;

export const ContentContainer = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.m}px 0 0 0`,
      l: `${p.theme.spacings.l}px 0 0 0`,
      xl: `0 ${p.theme.spacings.xl}px`,
    })}
  ${(p) =>
    p.theme.responsiveStyle("flex", {
      s: "0 0 100%",
      l: "0 1 40%",
    })}
`;

export const Date = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.s}px 0`,
      l: `${p.theme.spacings.m}px 0`,
    })}
`;

export const Image = styled("div")<{ backgroundImage: string }>`
  ${(p) =>
    p.theme.responsiveStyle("height", {
      s: "150px",
      l: "326px",
    })}
  ${(p) =>
    p.theme.responsiveStyle("flex", {
      s: "0 0 100%",
      l: "0 1 60%",
    })}
  ${(p) =>
    p.theme.responsiveStyle("margin-bottom", {
      s: `${p.theme.spacings.l}px`,
      xl: "0",
    })}
  ${(p) => p.theme.themedColor("background-color", "surface1")}
  background-image: url(${(p) => p.backgroundImage});
  background-position: center;
  background-size: cover;
`;

export const OuterContainer = styled("div")`
  ${(p) => p.theme.themedColor("background", "surface2")}
  ${(p) =>
    p.theme.responsiveStyle("display", {
      s: "block",
      xl: "flex",
    })}
  ${(p) =>
    p.theme.responsiveStyle("margin-bottom", {
      s: `${p.theme.backgroundGutters.s}px`,
      l: `${p.theme.backgroundGutters.l}px`,
    })}
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
    width: 100%;
`;

export const TagsContainer = styled.div`
  display: flex;
`;
