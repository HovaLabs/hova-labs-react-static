import styled from "styled-components";

export const OuterContainer = styled("input")`
  background: ${(p) => p.theme.colors.primary};
  border: 0;
  ${(p) => p.theme.typography.bodyText};
  color: ${(p) => p.theme.colors.onPrimary};
  ${(p) =>
    p.theme.responsiveStyle("margin", {
      s: `${p.theme.spacings.l}px 0`,
      l: "0",
    })}
`;
