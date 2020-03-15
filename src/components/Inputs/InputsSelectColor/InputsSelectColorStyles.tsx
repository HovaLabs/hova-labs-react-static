import styled from "styled-components";

export const Select = styled("select")`
  display: block;
  padding: 0.6em 1.4em 0.5em 0.8em;
  border: 0;
  border-bottom: ${p => `3px solid ${p.theme.colors.onSurface1}`};
  border-radius: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${p => p.theme.colors.surface1};
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  margin-bottom: ${p => `${p.theme.spacings.xl}px`};
  padding-left: 0;
  ${p => p.theme.typography.bodyText};
`;
