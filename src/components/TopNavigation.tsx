import React from "react";
import styled from "styled-components";
import { Link as LinkLib } from "@reach/router";
import { DimensionsContext, Text } from "@hova-labs/bento-box-web";

import { Icon, Link, Logo, Modal } from ".";

interface TopNavigationContainerProps {
  readonly scrolled: boolean;
  readonly menuIsOpen: boolean;
}

const TopNavigationContainer = styled("div")<TopNavigationContainerProps>`
  position: sticky;
  top: 0;
  z-index: 1000;
  > * {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${p =>
      p.theme.colors.backgroundSecondary
        .replace("rgb", "rgba")
        .replace(")", p.scrolled ? ", 1)" : ", 0.7)")};
    padding: ${p => p.theme.spacings.l}px;
    border-bottom: ${p => (p.scrolled ? "3px solid black" : "none")};
    transition: all 250ms;
  }
`;

const LogoContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("width", {
      s: "38px",
      l: "70px",
    })}
  ${p =>
    p.theme.responsiveStyle("height", {
      s: "38px",
      l: "70px",
    })}
  justify-self: flex-start;
`;

const Wide = styled("div")`
  ${p =>
    p.theme.responsiveStyle("display", {
      s: "none",
      l: "initial",
    })}
`;

const MenuButton = styled("div")`
  ${p =>
    p.theme.responsiveStyle("display", {
      s: "initial",
      l: "none",
    })}
  cursor: pointer;
`;

const ModalContent = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div > a {
    text-decoration: none;
    margin: 0 ${p => p.theme.spacings.l}px;
  }
`;

const ClosedButtonContainer = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${p => p.theme.spacings.l}px;
`;

const links = [
  { url: "/", name: "Home" },
  { url: "/projects", name: "Projects" },
  { url: "/blog", name: "Blog" },
  { url: "/store", name: "Store" },
  { url: "/contact", name: "Contact" },
];

export const TopNavigation = (): React.ReactElement => {
  const { breakpoint } = React.useContext(DimensionsContext);
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const isScrolled = (): boolean => {
    if (typeof document !== "undefined") {
      return (
        document.body.getBoundingClientRect().top +
          (["s", "m"].includes(breakpoint) ? 16 : 32) <
        0
      );
    }
    return false;
  };

  const [scrolled, setScrolled] = React.useState(isScrolled());

  React.useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(isScrolled());
    };

    window.addEventListener("scroll", handleScroll);
    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled, setScrolled]);

  return (
    <>
      <Modal isOpen={menuIsOpen}>
        <ModalContent>
          <ClosedButtonContainer>
            <Icon
              name="MdClose"
              onClick={(): void => setMenuIsOpen(!menuIsOpen)}
            />
          </ClosedButtonContainer>
          {links.map(l => (
            <div>
              <LinkLib to={l.url} onClick={(): void => setMenuIsOpen(false)}>
                <Text typography="headingLarge">{l.name}</Text>
              </LinkLib>
            </div>
          ))}
        </ModalContent>
      </Modal>
      <TopNavigationContainer scrolled={scrolled} menuIsOpen={menuIsOpen}>
        <div>
          <LinkLib to="/">
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </LinkLib>
          <Wide>
            {links.slice(1).map((
              l // Slice to remove "Home" since it's on the logo
            ) => (
              <Link to={l.url}>{l.name}</Link>
            ))}
          </Wide>
          <MenuButton>
            <Icon
              name="GiHamburgerMenu"
              onClick={(): void => {
                setMenuIsOpen(!menuIsOpen);
              }}
            />
          </MenuButton>
        </div>
      </TopNavigationContainer>
    </>
  );
};
