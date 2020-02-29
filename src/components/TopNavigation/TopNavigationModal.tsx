import React from "react";
import { Link } from "@reach/router";
import { MdClose } from "react-icons/md";
import { Icon, Text } from "@hova-labs/bento-box-web";

import { routes } from "../../routes";
import * as S from "./TopNavigationStyles";
import { ModalsMobileNav } from "..";

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
          <S.ModalLinkContainer onClick={() => setNavModalIsOpen(false)}>
            <Link to={routes.HOMEPAGE}>
              <div>
                <Text typography="headingSmall">Home</Text>
              </div>
            </Link>
            <Link to={routes.PROJECTS}>
              <div>
                <Text typography="headingSmall">Projects</Text>
              </div>
            </Link>
            <Link to={routes.BLOG}>
              <div>
                <Text typography="headingSmall">Blog</Text>
              </div>
            </Link>
            <Link to={routes.STORE}>
              <div>
                <Text typography="headingSmall">Store</Text>
              </div>
            </Link>
            <Link to={routes.CONTACT}>
              <div>
                <Text typography="headingSmall">Contact</Text>
              </div>
            </Link>
          </S.ModalLinkContainer>
        </S.ModalContent>
      </ModalsMobileNav>
    </S.ModalContainer>
  );
};
