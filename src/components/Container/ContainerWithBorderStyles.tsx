import styled, { css } from "styled-components";

export const OuterContainer = styled("div")`
  position: relative;
  ${(p) => p.theme.themedColor("background-color", "surface1")}
  ${(p) =>
    p.theme.responsiveStyle("margin", {
      s: `${p.theme.backgroundGutters.s}px`,
      l: `${p.theme.backgroundGutters.l}px`,
    })};
`;

export const ContentContainer = styled("div")`
  position: relative;
  z-index: 1;
`;

interface LineProps {
  readonly width: any;
}
export const Line = styled("div")<LineProps>`
  ${(p) => p.theme.themedColor("background", "primary")}
  opacity: 0.2;
  ${(p) =>
    p.theme.responsiveStyle("height", {
      s: "46px",
      l: "52px",
    })};
  margin-bottom: ${(p) => `${p.theme.spacings.l}px`};
  width: ${(p) => p.width};
`;

export const LineArea = styled("div")<LineProps>`
  position: absolute;
  height: 400px;
  width: 100%;
`;

interface BackgroundImageProps {
  readonly backgroundImage: any;
  readonly backgroundImageStyles?: any;
}
export const BackgroundImage = styled("div")<BackgroundImageProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${(p) => p.backgroundImage});
  background-position: center;
  background-size: cover;
  ${(p) => p.backgroundImageStyles}
`;

interface InnerContainerProps {
  readonly hasBackgroundImage: boolean;
}
export const InnerContainer = styled("div")<InnerContainerProps>`
  z-index: 1;
  ${(p) => p.theme.themedColor("background-color", "surface1")}
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.backgroundGutters.s}px`,
      l: `${p.theme.backgroundGutters.l}px`,
    })};
`;
