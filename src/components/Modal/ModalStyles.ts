import styled from "styled-components";

export const ModalContainer = styled("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const CircleContainer = styled("div")`
  position: fixed;
  z-index: 9000;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.01);
  pointer-events: none;
`;

interface CircleDivProps {
  readonly isOpen: boolean;
  readonly radius: number;
}
export const CircleDiv = styled("div")<CircleDivProps>`
  position: absolute;
  width: ${p => (p.isOpen ? p.radius * 2 : 0)}px;
  height: ${p => (p.isOpen ? p.radius * 2 : 0)}px;
  top: ${p => (p.isOpen ? -p.radius + 50 : 50)}px;
  right: ${p => (p.isOpen ? -p.radius + 50 : 50)}px;
  border-radius: 50%;
  pointer-events: none;
  transition: all 500ms;
  ${p => (p.isOpen ? "" : "transition-delay: 250ms;")}
  background: ${p => p.theme.colors.backgroundPrimary};
  opacity: ${p => (p.isOpen ? 1 : 0)};
`;

interface ContentContainerProps {
  readonly isOpen: boolean;
}
export const ContentContainer = styled("div")<ContentContainerProps>`
  position: fixed;
  z-index: 9001;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  ${p => (p.isOpen ? "" : "pointer-events: none;")}
  opacity: ${p => (p.isOpen ? 1 : 0)};
  transition: opacity 250ms;
  ${p => (p.isOpen ? "transition-delay: 500ms;" : "")}
`;
