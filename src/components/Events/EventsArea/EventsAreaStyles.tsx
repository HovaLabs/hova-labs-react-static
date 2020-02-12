import styled from "styled-components";

/*
- EventListInnerContainer
- EventListOuterContainer
- OuterContainer
*/

export const EventListInnerContainer = styled("div")`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: ${p => p.theme.spacings.l}px;
`;

export const EventListOuterContainer = styled("div")`
  padding-top: ${p => p.theme.spacings.xl}px;
`;

export const OuterContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("margin-top", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.backgroundGutters.s}px`,
      l: `${p.theme.backgroundGutters.l}px`,
    })}
  background-color: ${p => p.theme.colors.surface};
`;
