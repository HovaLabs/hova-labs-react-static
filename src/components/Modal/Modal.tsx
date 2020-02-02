import React from "react";

import { Portal } from "..";
import * as S from "./ModalStyles";

const getMaxWindowDimension = (): number => {
  return Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
};

const Circle = ({ isOpen }: { isOpen: boolean }): React.ReactElement => {
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
  }, [setMaxDimension]);

  return (
    <S.CircleContainer>
      <S.CircleDiv isOpen={isOpen} radius={maxDimension} />
    </S.CircleContainer>
  );
};

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}
export const Modal = ({ children, isOpen }: ModalProps): React.ReactElement => {
  return (
    <Portal>
      <S.ModalContainer>
        <Circle isOpen={isOpen} />
        <S.ContentContainer isOpen={isOpen}>{children}</S.ContentContainer>
      </S.ModalContainer>
    </Portal>
  );
};
