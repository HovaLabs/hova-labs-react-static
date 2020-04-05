import styled from "styled-components";

export const Select = styled("select")<{ backgroundImage: string }>`
  display: block;
  padding: 0.6em 1.4em 0.5em 0.8em;
  background: transparent;
  border: 0;
  border-bottom: ${(p) => `3px solid ${p.theme.colors.onSurface1}`};
  border-radius: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url(${(p) => p.backgroundImage});
  background-repeat: no-repeat, repeat;
  background-position: right 0 top 60%, 0 0;
  background-size: 0.65em auto, 100%;
  margin-bottom: ${(p) => `${p.theme.spacings.xl}px`};
  padding-left: 0;
  ${(p) => p.theme.typography.bodyText};
`;
