import styled, { css } from "styled-components";

export const OuterContainer = styled("div")`
  position: relative;
  background-color: ${p => p.theme.colors.surface};
  ${p =>
    p.theme.responsiveStyle("margin", {
      s: `0 ${p.theme.backgroundGutters.s}px`,
      l: `0 ${p.theme.backgroundGutters.l}px`,
    })};
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
  background-image: url(${p => p.backgroundImage});
  background-position: center;
  background-size: cover;
  ${p => p.backgroundImageStyles}
`;

interface InnerContainerProps {
  readonly hasBackgroundImage: boolean;
}
export const InnerContainer = styled("div")<InnerContainerProps>`
  position: relative;
  z-index: 1;
  ${p =>
    p.hasBackgroundImage
      ? null
      : css`
          background-color: ${p => p.theme.colors.surface};
        `}
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.backgroundGutters.s}px`,
      l: `${p.theme.backgroundGutters.l}px`,
    })};
  ${p =>
    p.theme.responsiveStyle("margin", {
      s: `0 0 ${p.theme.backgroundGutters.s}px 0`,
      l: `0 0 ${p.theme.backgroundGutters.l}px 0`,
    })};
`;
