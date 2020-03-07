import styled from "styled-components";

interface OuterContainerProps {
  readonly isFooter: boolean;
}
export const OuterContainer = styled("div")<OuterContainerProps>`
  background-color: ${p => p.theme.colors.background};
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.backgroundGutters.s / 2}px ${
        p.theme.backgroundGutters.s
      }px`,
      l: `${p.theme.backgroundGutters.l / 2}px ${
        p.theme.backgroundGutters.l
      }px`,
    })};
  ${p =>
    p.theme.responsiveStyle("padding-bottom", {
      s: `${
        p.isFooter
          ? p.theme.backgroundGutters.s
          : p.theme.backgroundGutters.s / 2
      }px`,
      l: `${
        p.isFooter
          ? p.theme.backgroundGutters.l
          : p.theme.backgroundGutters.l / 2
      }px`,
    })};
`;

export const InnerContainer = styled("div")`
  background-color: ${p => p.theme.colors.surface};
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.backgroundGutters.s / 2}px ${
        p.theme.backgroundGutters.s
      }px`,
      l: `${p.theme.backgroundGutters.l / 2}px ${
        p.theme.backgroundGutters.l
      }px`,
    })};
`;
