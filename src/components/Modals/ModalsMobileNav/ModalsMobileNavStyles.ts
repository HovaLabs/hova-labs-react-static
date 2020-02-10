import styled from "styled-components";

export const ModalContainer = styled("div")`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

interface ContentContainerProps {
  readonly isOpen: boolean;
}
export const ContentContainer = styled("div")<ContentContainerProps>`
  position: fixed;
  pointer-events: auto;
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
