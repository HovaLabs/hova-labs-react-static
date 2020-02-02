import React from "react";
import { MdClose } from "react-icons/md";
import { Icon } from "@hova-labs/bento-box-web";

import * as S from "./TopNavigationStyles";
import { Modal } from "..";
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
            <Icon
              size={32}
              IconComponent={MdClose}
              onPress={(): void => setNavModalIsOpen(!navModalIsOpen)}
            />
          </S.ClosedButtonContainer>
          {mobileNavLinks}
        </S.ModalContent>
      </Modal>
    </S.ModalContainer>
  );
};
