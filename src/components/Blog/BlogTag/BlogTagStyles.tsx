import styled from "styled-components";

export const Button = styled("button")(p => ({
  background: "none",
  border: `${p.theme.frames.outline.border}px solid ${p.theme.colors.accentPrimary}`,
  color: p.theme.colors.accentPrimary,
  margin: `${p.theme.spacings.m}px ${p.theme.spacings.m}px`,
  padding: `${p.theme.spacings.m}px ${p.theme.spacings.l}px`,
}));
