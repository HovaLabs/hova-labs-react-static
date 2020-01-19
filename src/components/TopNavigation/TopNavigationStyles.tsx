import styled from "styled-components";

interface TopNavigationContainerProps {
  readonly scrolled: boolean;
  readonly menuIsOpen: boolean;
}

export const TopNavigationContainer = styled("div")<
  TopNavigationContainerProps
>`
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
  justify-self: flex-start;
`;

export const Wide = styled("div")`
  ${p =>
    p.theme.responsiveStyle("display", {
      s: "none",
      l: "initial",
    })}
  > span > a {
    text-decoration: none;
    margin-left: ${p => p.theme.spacings.xl}px;
  }
`;

export const MenuButton = styled("div")`
  ${p =>
    p.theme.responsiveStyle("display", {
      s: "initial",
      l: "none",
    })}
  cursor: pointer;
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
  left: 0;
  padding: ${p => p.theme.spacings.l}px;
`;
