import styled from "styled-components";

/*
- EventListInnerContainer
- EventListOuterContainer
- OuterContainer
*/

export const EventListInnerContainer = styled("div")`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: ${(p) => p.theme.spacings.l}px;
`;
