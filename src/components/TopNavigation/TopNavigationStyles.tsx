import styled, { DefaultTheme } from "styled-components";
import { Icon, HovaLabsLogo } from "@hova-labs/bento-box-web";

interface TopNavigationContainerProps {
  readonly scrolled: boolean;
  readonly menuIsOpen: boolean;
}

export const getTopNavHeight = (p: { theme: DefaultTheme }): number => {
  return p.theme.responsiveValue({
    s: 38 + p.theme.spacings.xl * 2,
    l: 70 + p.theme.spacings.xl * 2,
  })(p);
};

export const Logo = styled(Icon).attrs(p => ({
  size: p.theme.responsiveValue({
    s: 38,
    l: 70,
  })(p),
  IconComponent: HovaLabsLogo,
  onPress: () => {}, // Adding onPress to give it "touchable opacity"
}))`
  color: ${p => p.theme.colors.primary};
`;

// Helper function that sets the color to primary if scrolled, or opaque if not-scrolled
// Where "not scrolled" means that the page is scrolled up to the top
const primaryOpaqueIfScrolled = (
  p: TopNavigationContainerProps & { theme: DefaultTheme }
): string =>
  p.theme.colors.backgroundPrimary
    .replace("rgb", "rgba")
    .replace(")", p.scrolled ? ", 1)" : ", 0)");

export const TopNavigationContainer = styled("div")<
  TopNavigationContainerProps
>`
  position: fixed;
  top: 0;
  z-index: 1000;
  > * {
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${primaryOpaqueIfScrolled};
    ${p =>
      p.theme.responsiveStyle("padding", {
        s: `${p.theme.spacings.xl}px`,
        l: `${p.theme.spacings.xl}px`,
      })}
    transition: all 250ms;
  }
`;

export const Li = styled("li")`
  display: inline;
  padding-right: ${p => p.theme.spacings.xl}px;
  > a {
    text-decoration: none;
  }
  ${p =>
    p.theme.responsiveStyle("padding-bottom", {
      s: `${p.theme.spacings.xl}px`,
      l: "0px",
    })}
`;

export const LogoContainer = styled("div")`
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
  ${p =>
    p.theme.responsiveStyle("margin", {
      s: `0`,
      l: 0,
    })}
  justify-self: flex-start;
`;

export const Ul = styled("ul")`
  list-style: none;
  ${p =>
    p.theme.responsiveStyle("display", {
      s: "none",
      l: "initial",
    })};
`;

export const MenuButton = styled("div")`
  ${p =>
    p.theme.responsiveStyle("display", {
      s: "initial",
      l: "none",
    })}
  cursor: pointer;
`;

export const ModalContainer = styled("div")`
  color: red;
  ${p =>
    p.theme.responsiveStyle("display", {
      s: "block",
      l: "none",
    })}
`;

export const ModalContent = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    margin: ${p => p.theme.spacings.m}px 0;
    > a {
      text-decoration: none;
    }
  }
`;

export const ClosedButtonContainer = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${p => p.theme.spacings.xl}px;
`;
