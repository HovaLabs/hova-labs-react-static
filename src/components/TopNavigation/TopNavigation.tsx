import React from "react";
import { Link } from "gatsby";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Icon,
  HovaLabsLogo,
  Text,
  ThemeToggle,
  ThemeContext,
} from "@hova-labs/bento-box-web";
import { TopNavigationModal } from "./TopNavigationModal";

import { routes } from "../../routes";
import * as S from "./TopNavigationStyles";

export const TopNavigation: React.FC<{}> = () => {
  const [navModalIsOpen, setNavModalIsOpen] = React.useState<boolean>(false);
  const { theme, setThemeByThemeKey } = React.useContext(ThemeContext);
  const themeToggle = (
    <S.Toggle>
      <ThemeToggle
        onPress={() => {
          setThemeByThemeKey(
            theme.name === "lightTheme" ? "darkTheme" : "lightTheme",
          );
        }}
        currentTheme={theme.name}
      />
    </S.Toggle>
  );

  return (
    <>
      <TopNavigationModal
        navModalIsOpen={navModalIsOpen}
        setNavModalIsOpen={setNavModalIsOpen}
      />
      <S.TopNavPadding />
      <S.Container>
        <Link to={routes.HOMEPAGE}>
          <S.Logo>
            <Icon IconComponent={HovaLabsLogo} size={64} onPress={() => {}} />
          </S.Logo>
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <S.Links>
            {["s", "m"].includes(theme.breakpoint) ? (
              <>
                {themeToggle}
                <Icon
                  IconComponent={GiHamburgerMenu}
                  size={42}
                  onPress={() => {
                    setNavModalIsOpen(true);
                  }}
                />
              </>
            ) : (
              <>
                <Link to={routes.PROJECTS}>
                  <Text typography="bodyText">Projects</Text>
                </Link>
                <Link to={routes.BLOG}>
                  <Text typography="bodyText">Blog</Text>
                </Link>
                <Link to={routes.STORE}>
                  <Text typography="bodyText">Store</Text>
                </Link>
                <Link to={routes.CONTACT}>
                  <Text typography="bodyText">Contact</Text>
                </Link>
                {themeToggle}
              </>
            )}
          </S.Links>
        </div>
        {/* <S.MenuButton /> */}
      </S.Container>
    </>
  );
};
