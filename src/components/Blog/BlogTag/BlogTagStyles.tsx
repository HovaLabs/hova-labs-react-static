import styled from "styled-components";

export const Button = styled("button")`
  background: transparent;
  border: ${p =>
    `${p.theme.frames.outline.border}px solid ${p.theme.colors.primary}`};
  color: ${p => p.theme.colors.primary};
  margin: ${p => `${p.theme.spacings.m}px ${p.theme.spacings.m}px`};
  padding: ${p => `${p.theme.spacings.m}px ${p.theme.spacings.l}px`};
  &:hover {
    border: ${p =>
      `${p.theme.frames.outline.border}px solid ${p.theme.colors.secondary}`};
    color: ${p => p.theme.colors.secondary};
  }
`;
