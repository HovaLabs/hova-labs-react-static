import styled from "styled-components";

// TopNavPadding and Container are used together to create a fixed TopNav and to push down everything below it

export const TopNavPadding = styled("div")`
  height: ${(p) => p.theme.spacings.xxl}px;
`;

export const Container = styled("div")`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: ${(p) => p.theme.spacings.xxl}px;
  justify-content: space-between;
  align-items: center;
  background: ${(p) => p.theme.colors.background};
  z-index: 1000;
  margin-left: ${(p) =>
    p.theme.responsiveValue({
      s: 11,
      l: 0,
    })}px;
  margin-right: ${(p) =>
    p.theme.responsiveValue({
      s: 11,
      l: 0,
    })}px;
`;

export const Links = styled("div")`
  display: flex;
  align-items: center;
  margin-right: ${(p) =>
    p.theme.responsiveValue({
      s: 24,
      l: p.theme.backgroundGutters.l,
    })}px;
  > a {
    margin: ${(p) => p.theme.spacings.l}px;
    :last-child {
      margin-right: 0;
    }
  }
`;

export const Toggle = styled("div")`
  margin-right: ${(p) =>
    p.theme.responsiveValue({
      s: p.theme.spacings.l,
      l: 0,
    })}px;
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
  padding: ${(p) => p.theme.spacings.xl}px;
`;
