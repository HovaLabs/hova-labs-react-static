import styled from "styled-components";

export const InputsText = styled("input")`
  ${(p) => p.theme.typography.bodyText};
  ${(p) => p.theme.themedColor("background", "surface1")}
  ${(p) => p.theme.themedColor("border-color", "onSurface1")}
  ${(p) => p.theme.themedColor("color", "onSurface1")}
  border-radius: 0;
  padding: ${(p) => `${p.theme.spacings.m}px`};
  ${(p) =>
    p.theme.responsiveStyle("width", {
      s: "100%",
      l: "auto",
    })}
`;
