import styled from "styled-components";

export const OuterContainer = styled("input")`
  ${(p) => p.theme.typography.bodyText};
  ${(p) => p.theme.themedColor("background", "primary")}
  border: 0;
  ${(p) => p.theme.themedColor("color", "onPrimary")}
  ${(p) =>
    p.theme.responsiveStyle("margin", {
      s: `${p.theme.spacings.l}px 0`,
      l: "0",
    })}
`;
