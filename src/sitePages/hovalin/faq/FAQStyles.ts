import styled from "styled-components";

export const Q = styled("div")`
  margin-bottom: ${(p) => p.theme.spacings.m}px;
  margin-top: ${(p) => p.theme.spacings.xl}px;
  ${(p) => p.theme.typography.headingSmall};
  ${(p) => p.theme.themedColor("color", "primary")}
`;
