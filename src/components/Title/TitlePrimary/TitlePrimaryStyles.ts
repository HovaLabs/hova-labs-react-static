import styled from "styled-components";

export const Subtitle = styled("p")`
  ${(p) => p.theme.typography.bodyText};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: ${(p) => `${p.theme.spacings.m}px`};
`;

export const Title = styled("p")`
  ${(p) => p.theme.typography.headingMedium};
  margin-top: 0;
  margin-bottom: ${(p) => `${p.theme.spacings.l}px`};
`;
