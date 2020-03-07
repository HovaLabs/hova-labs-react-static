import styled from "styled-components";

export const OuterContainer = styled("div")`
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
