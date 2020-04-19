import styled from "styled-components";

interface CircleDivProps {
  readonly isOpen: boolean;
  readonly radius: number;
}
export const CircleDiv = styled("div")<CircleDivProps>`
  position: absolute;
  ${(p) => p.theme.themedColor("background", "background")}
  width: ${(p) => (p.isOpen ? p.radius * 2 : 0)}px;
  height: ${(p) => (p.isOpen ? p.radius * 2 : 0)}px;
  top: ${(p) => (p.isOpen ? -p.radius + 50 : 50)}px;
  right: ${(p) => (p.isOpen ? -p.radius + 50 : 50)}px;
  border-radius: 50%;
  pointer-events: none;
  transition: all 500ms;
  ${(p) => (p.isOpen ? "" : "transition-delay: 250ms;")}
  opacity: ${(p) => (p.isOpen ? 1 : 0)};
`;

export const OuterContainer = styled("div")`
  position: fixed;
  z-index: 9000;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.01);
  pointer-events: none;
`;
