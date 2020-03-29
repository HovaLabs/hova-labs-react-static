import React from "react";
import { Link } from "gatsby";
import { MdClose } from "react-icons/md";
import { Icon, Text } from "@hova-labs/bento-box-web";

import { routes } from "../../routes";
import * as S from "./TopNavigationStyles";
import * as S2 from "./TopNavigationModalStyles";
import { ModalsMobileNav } from "..";

export const TopNavigationModal: React.FC<{
  navModalIsOpen: boolean;
  setNavModalIsOpen: Function;
}> = ({ navModalIsOpen, setNavModalIsOpen }) => (
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
            <S2.Link>
              <Text typography="headingMedium">Home</Text>
            </S2.Link>
          </Link>
          <Link to={routes.PROJECTS}>
            <S2.Link>
              <Text typography="headingMedium">Projects</Text>
            </S2.Link>
          </Link>
          <Link to={routes.BLOG}>
            <S2.Link>
              <Text typography="headingMedium">Blog</Text>
            </S2.Link>
          </Link>
          <Link to={routes.STORE}>
            <S2.Link>
              <Text typography="headingMedium">Store</Text>
            </S2.Link>
          </Link>
          <Link to={routes.CONTACT}>
            <S2.Link>
              <Text typography="headingMedium">Contact</Text>
            </S2.Link>
          </Link>
        </S.ModalLinkContainer>
      </S.ModalContent>
    </ModalsMobileNav>
  </S.ModalContainer>
);
