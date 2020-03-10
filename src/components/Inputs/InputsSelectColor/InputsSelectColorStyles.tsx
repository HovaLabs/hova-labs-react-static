import styled, { css } from "styled-components";

export const ColorOptionButton = styled("button")`
  align-items: center;
  background-color: ${p => `${p.theme.colors.surface1}`};
  border: ${p => `3px solid ${p.theme.colors.onSurface1}`};
  color: ${p => `${p.theme.colors.onSurface1}px`};
  display: flex;
  position: relative;
  width: 153px;
  align-items: center;
  padding: ${p => `${p.theme.spacings.m}px`};
  z-index: 1;
`;
export const ButtonContainer = styled("div")`
  height: 200px;
  position: absolute;
  overflow: scroll;
`;

interface ColorOptionCircle {
  readonly color: string;
}
export const ColorOptionCircle = styled("div")<ColorOptionCircle>`
  border: 3px solid black;
  border-radius: 50%;
  margin-right: ${p => `${p.theme.spacings.m}px`};
  height: 18px;
  width: 18px;
  ${p =>
    css`
      background-color: ${p.color};
    `}
`;

export const OuterContainer = styled("div")`
  margin-bottom: ${p => `${p.theme.spacings.xl}px`};
`;
