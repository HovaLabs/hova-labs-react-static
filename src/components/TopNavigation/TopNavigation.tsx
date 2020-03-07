import React from "react";
import { ThemeContext } from "styled-components";
import { Link } from "@reach/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { Icon, HovaLabsLogo, Text } from "@hova-labs/bento-box-web";
import { TopNavigationModal } from "./TopNavigationModal";

import { routes } from "../../routes";
import * as S from "./TopNavigationStyles";

export const TopNavigation: React.FC<{}> = () => {
  const [navModalIsOpen, setNavModalIsOpen] = React.useState<boolean>(false);
  const theme = React.useContext(ThemeContext);

  return (
    <>
      <TopNavigationModal
        navModalIsOpen={navModalIsOpen}
        setNavModalIsOpen={setNavModalIsOpen}
      />
      <S.TopNavPadding />
      <S.Container>
        <Link to={routes.HOMEPAGE}>
          <Icon IconComponent={HovaLabsLogo} size={64} onPress={() => {}} />
        </Link>
        <S.Links>
          {["s", "m"].includes(theme.breakpoint) ? (
            <Icon
              IconComponent={GiHamburgerMenu}
              size={64}
              onPress={() => {
                setNavModalIsOpen(true);
              }}
            />
          ) : (
            <>
              <Link to={routes.PROJECTS}>
                <Text typography="headingSmall">Projects</Text>
              </Link>
              <Link to={routes.BLOG}>
                <Text typography="headingSmall">Blog</Text>
              </Link>
              <Link to={routes.STORE}>
                <Text typography="headingSmall">Store</Text>
              </Link>
              <Link to={routes.CONTACT}>
                <Text typography="headingSmall">Contact</Text>
              </Link>
            </>
          )}
        </S.Links>
        {/* <S.MenuButton /> */}
      </S.Container>
    </>
  );
};
