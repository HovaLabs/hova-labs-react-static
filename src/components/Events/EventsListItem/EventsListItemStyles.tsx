import styled from "styled-components";

export const EventGridInfoBox = styled("div")`
  display: flex;
  flex-direction: column;
  padding: ${(p) => p.theme.spacings.l}px;
  ${(p) => p.theme.themedColor("background", "background")}
`;

export const EventGridDateBox = styled("div")`
  display: flex;
  flex-direction: column;
  padding: ${(p) => p.theme.spacings.l}px;
  ${(p) => p.theme.themedColor("background", "background")}
`;
