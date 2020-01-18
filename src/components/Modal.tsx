import React from "react";
import styled from "styled-components";

import { Portal } from ".";

const CircleContainer = styled("div")`
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
const CircleDiv = styled("div")<CircleDivProps>`
  position: absolute;
  width: ${p => (p.isOpen ? p.radius * 2 : 0)}px;
  height: ${p => (p.isOpen ? p.radius * 2 : 0)}px;
  top: ${p => (p.isOpen ? -p.radius + 50 : 50)}px;
  right: ${p => (p.isOpen ? -p.radius + 50 : 50)}px;
  border-radius: 50%;
  pointer-events: none;
  transition: all 500ms;
  ${p => (p.isOpen ? "" : "transition-delay: 500ms;")}
  background: ${p => p.theme.colors.backgroundPrimary};
  opacity: ${p => (p.isOpen ? 1 : 0)};
`;

const Circle = ({ isOpen }: { isOpen: boolean }) => {
  const getMaxWindowDimension = (): number => {
    return Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
  };

  const [maxDimension, setMaxDimension] = React.useState(
    getMaxWindowDimension()
  );

  React.useEffect(() => {
    const setMaxWindowDimension = (): void => {
      setMaxDimension(getMaxWindowDimension());
    };

    window.addEventListener("resize", setMaxWindowDimension);
    return (): void => {
      window.removeEventListener("resize", setMaxWindowDimension);
    };
  }, [getMaxWindowDimension, setMaxDimension]);

  return (
    <CircleContainer>
      <CircleDiv isOpen={isOpen} radius={maxDimension} />
    </CircleContainer>
  );
};

interface ContentContainerProps {
  readonly isOpen: boolean;
}
const ContentContainer = styled("div")<ContentContainerProps>`
  position: fixed;
  z-index: 9001;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  ${p => (p.isOpen ? "" : "pointer-events: none;")}
  opacity: ${p => (p.isOpen ? 1 : 0)};
  transition: opacity 500ms;
  ${p => (p.isOpen ? "transition-delay: 500ms;" : "")}
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export const Modal = ({ children, isOpen }: ModalProps) => {
  return (
    <Portal>
      <Circle isOpen={isOpen} />
      <ContentContainer isOpen={isOpen}>{children}</ContentContainer>
    </Portal>
  );
};
