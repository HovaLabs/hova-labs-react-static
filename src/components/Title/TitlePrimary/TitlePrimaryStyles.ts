import styled from "styled-components";

export const Subtitle = styled("p")`
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: ${(p) => `${p.theme.spacings.m}px`};
  ${(p) => p.theme.typography.bodyText};
`;

export const Title = styled("p")`
  margin-top: 0;
  margin-bottom: ${(p) => `${p.theme.spacings.l}px`};
  ${(p) => p.theme.typography.headingMedium};
`;
