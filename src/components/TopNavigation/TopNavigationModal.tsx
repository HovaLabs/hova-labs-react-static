import React from "react";
import { MdClose } from "react-icons/md";
import { Icon } from "@hova-labs/bento-box-web";

import * as S from "./TopNavigationStyles";
import { ModalsMobileNav } from "..";
import { MobileNavLinks } from "./TopNavigationLinks";

export const TopNavigationModal = ({
  navModalIsOpen,
  setNavModalIsOpen,
}: {
  navModalIsOpen: boolean;
  setNavModalIsOpen: Function;
}): React.ReactElement => {
  return (
    <S.ModalContainer>
      <ModalsMobileNav isOpen={navModalIsOpen}>
        <S.ModalContent>
          <S.ClosedButtonContainer>
            <Icon
              size={32}
              IconComponent={MdClose}
              onPress={(): void => setNavModalIsOpen(false)}
            />
          </S.ClosedButtonContainer>
          <MobileNavLinks onPress={(): void => setNavModalIsOpen(false)} />
        </S.ModalContent>
      </ModalsMobileNav>
    </S.ModalContainer>
  );
};
