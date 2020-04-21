import styled from "styled-components";
import { Icon } from "@hova-labs/bento-box-web";
// TopNavPadding and Container are used together to create a fixed TopNav and to push down everything below it

export const TopNavPadding = styled("div")`
  height: ${(p) => p.theme.spacings.xxl}px;
`;

export const Logo = styled("div")`
  > div {
    display: flex;
  }
  ${(p) =>
    p.theme.responsiveStyle("padding-left", {
      s: `${p.theme.spacings.s - 5}px`,
      l: `${p.theme.spacings.xl - 5}px`,
    })};
`;

// redundant name... just want to overwrite the fill property
export const LogoIcon = styled(Icon)`
  ${(p) => p.theme.responsiveStyle("fill", "onBackground")}
`;

export const Container = styled("div")`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: ${(p) => p.theme.spacings.xxl}px;
  justify-content: space-between;
  align-items: center;
  ${(p) => p.theme.themedColor("background", "background")}
  z-index: 1000;
  ${(p) =>
    p.theme.responsiveStyle("margin-left", {
      s: "11px",
      l: "0px",
    })};
  ${(p) =>
    p.theme.responsiveStyle("margin-right", {
      s: "11px",
      l: "0px",
    })};
`;

interface ToggleProps {
  readonly isMounted?: boolean;
}
// we're hard-coding the width to hold position until js loads, then fading in once js loads
export const Toggle = styled("div")<ToggleProps>`
  width: 78px;
  opacity: ${(p) => (p.isMounted ? "1" : "0")};
  transition: opacity 500ms;
  ${(p) =>
    p.theme.responsiveStyle("margin-right", {
      s: `${p.theme.spacings.l}px`,
      l: "0px",
    })};
  > div {
    border: 3px solid black;
    ${(p) => p.theme.themedColor("border-color", "onBackground")}
  }
`;

export const ModalLinkContainer = styled("div")``;

export const ModalContainer = styled("div")`
  color: red;
  ${(p) =>
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
    margin: ${(p) => p.theme.spacings.m}px 0;
    > a {
      text-decoration: none;
    }
  }
`;

export const ClosedButtonContainer = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(p) => p.theme.spacings.l}px;
`;

export const MobileLinks = styled("div")`
  display: flex;
  align-items: center;
  > div:nth-child(2) {
    display: flex;
  }
  ${(p) =>
    p.theme.responsiveStyle("margin-right", {
      s: "24px",
      l: `${p.theme.backgroundGutters.l}px`,
    })};
  > a {
    margin: ${(p) => p.theme.spacings.l}px;
    :last-child {
      margin-right: 0;
    }
  }
  ${(p) =>
    p.theme.responsiveStyle("display", {
      s: "inherit",
      l: "none",
    })}
`;

export const DesktopLinks = styled("div")`
  display: flex;
  align-items: center;
  ${(p) =>
    p.theme.responsiveStyle("margin-right", {
      s: "24px",
      l: `${p.theme.backgroundGutters.l}px`,
    })};
  > a {
    margin: ${(p) => p.theme.spacings.l}px;
    :last-child {
      margin-right: 0;
    }
  }
  ${(p) =>
    p.theme.responsiveStyle("display", {
      s: "none",
      l: "inherit",
    })}
`;

export const LinkContainer = styled("div")`
  display: flex;
  align-items: center;
`;
