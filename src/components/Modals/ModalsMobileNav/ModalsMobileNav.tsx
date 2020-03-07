import React from "react";
import { Portal } from "../..";
import * as S from "./ModalsMobileNavStyles";
import ModalsMobileNavBackground from "./ModalsMobileNavBackground/ModalsMobileNavBackground";

interface ModalsMobileNavProps {
  children: React.ReactNode;
  isOpen: boolean;
}
export const ModalsMobileNav: React.FC<ModalsMobileNavProps> = ({
  children,
  isOpen,
}) => {
  return (
    <Portal>
      <S.ModalContainer>
        <ModalsMobileNavBackground isOpen={isOpen} />
        <S.ContentContainer isOpen={isOpen}>{children}</S.ContentContainer>
      </S.ModalContainer>
    </Portal>
  );
};
