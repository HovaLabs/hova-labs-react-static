import React from "react";
import * as S from "./TopNavigationStyles";
import { Icon, Modal } from "..";
import { mobileNavLinks } from "./TopNavigationLinks";

export const TopNavigationModal = ({
  navModalIsOpen,
  setNavModalIsOpen,
}: {
  navModalIsOpen: boolean;
  setNavModalIsOpen: Function;
}): React.ReactElement => {
  return (
    <Modal isOpen={navModalIsOpen}>
      <S.ModalContent>
        <S.ClosedButtonContainer>
          <Icon
            name="MdClose"
            onClick={(): void => setNavModalIsOpen(!navModalIsOpen)}
          />
        </S.ClosedButtonContainer>
        {mobileNavLinks}
      </S.ModalContent>
    </Modal>
  );
};
