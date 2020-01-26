import React from "react";
import * as S from "./TopNavigationStyles";
import { Modal } from "..";
import { Icons } from "../Icons";
import { mobileNavLinks } from "./TopNavigationLinks";

export const TopNavigationModal = ({
  navModalIsOpen,
  setNavModalIsOpen,
}: {
  navModalIsOpen: boolean;
  setNavModalIsOpen: Function;
}): React.ReactElement => {
  return (
    <S.ModalContainer>
      <Modal isOpen={navModalIsOpen}>
        <S.ModalContent>
          <S.ClosedButtonContainer>
            <Icons
              name="MdClose"
              onClick={(): void => setNavModalIsOpen(!navModalIsOpen)}
            />
          </S.ClosedButtonContainer>
          {mobileNavLinks}
        </S.ModalContent>
      </Modal>
    </S.ModalContainer>
  );
};
