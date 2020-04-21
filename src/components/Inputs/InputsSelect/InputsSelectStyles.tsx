import styled from "styled-components";

export const Select = styled("select")<{ backgroundImage: string }>`
  ${(p) => p.theme.typography.bodyText};
  display: block;
  padding: 0.6em 1.4em 0.5em 0.8em;
  background: transparent;
  border: 0;
  border-bottom: 3px solid transparent;
  ${(p) => p.theme.themedColor("border-bottom-color", "onSurface1")}

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
  > option {
    ${p => p.theme.themedColor('background-color', 'surface1')}
    ${p => p.theme.themedColor('color', 'onSurface1')}
  }
`;
