import React from "react";
import { Link } from "@reach/router";
import { Icon } from "@hova-labs/bento-box-web";
import { GiHamburgerMenu } from "react-icons/gi";

import { routes } from "../../routes";
import * as S from "./TopNavigationStyles";
import { TopNavigationModal } from "./TopNavigationModal";
import { desktopNavLinks } from "./TopNavigationLinks";

const isScrolled = (): boolean => {
  // Allows us to build with React Static
  // variable "document" doesn't exist in a Node env
  if (typeof document !== "undefined") {
    return document.body.getBoundingClientRect().top < 0;
  }
  return false;
};

export const TopNavigation = (): React.ReactElement => {
  // STATE VARIABLES
  const [navModalIsOpen, setNavModalIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(isScrolled());

  // HANDLE SCROLL BEHAVIOR
  React.useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(isScrolled());
    };
    window.addEventListener("scroll", handleScroll);
    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <TopNavigationModal
        navModalIsOpen={navModalIsOpen}
        setNavModalIsOpen={setNavModalIsOpen}
      />
      <S.TopNavigationContainer scrolled={scrolled} menuIsOpen={navModalIsOpen}>
        <div>
          <Link to={routes.HOMEPAGE}>
            <S.LogoContainer>
              <S.Logo />
            </S.LogoContainer>
          </Link>
          <S.Ul>{desktopNavLinks}</S.Ul>
          <S.MenuButton>
            <Icon
              size={32}
              IconComponent={GiHamburgerMenu}
              onPress={(): void => {
                setNavModalIsOpen(!navModalIsOpen);
              }}
            />
          </S.MenuButton>
        </div>
      </S.TopNavigationContainer>
    </>
  );
};
