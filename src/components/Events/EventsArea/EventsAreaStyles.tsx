import styled from "styled-components";

/*
- EventListInnerContainer
- EventListOuterContainer
- OuterContainer
*/

export const EventListInnerContainer = styled("div")`
  width: 100%;
  display: flex;
  > div {
    :first-child {
      margin-right: ${(p) => p.theme.spacings.l}px;
      flex: none;
    }
    :last-child {
      flex: 1 0 auto;
    }
  }
`;
