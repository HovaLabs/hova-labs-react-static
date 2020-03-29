import styled from "styled-components";

export const InputsText = styled("input")`
  background: ${(p) => p.theme.colors.surface1};
  border: ${(p) => `3px solid ${p.theme.colors.onSurface1}`};
  color: ${(p) => p.theme.colors.onSurface1};
  padding: ${(p) => `${p.theme.spacings.m}px`};
  ${(p) => p.theme.typography.bodyText};
  ${(p) =>
    p.theme.responsiveStyle("width", {
      s: "100%",
      l: "auto",
    })}
`;
