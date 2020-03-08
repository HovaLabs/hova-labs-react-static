import React from "react";
import { Link } from "@reach/router";
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ paddingRight: 16 }}>
            <ThemeToggle
              onPress={() => {
                setThemeByThemeKey(
                  theme.name === "lightTheme" ? "darkTheme" : "lightTheme"
                );
              }}
              currentTheme={theme.name}
            />
          </div>
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
        </div>
        {/* <S.MenuButton /> */}
      </S.Container>
    </>
  );
};
