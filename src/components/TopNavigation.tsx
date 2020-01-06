import React from "react";
import styled from "styled-components";

import { Link, Logo } from ".";

const TopNavigationContainer = styled("div")`
  position: absolute;
  z-index: 1000;
  ${p =>
    p.theme.responsiveStyle("width", {
      s: `calc(100% - ${p.theme.spacings.l * 2}px)`,
      l: `calc(100% - ${p.theme.spacings.xl * 2}px)`,
    })}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${p => p.theme.colors.backgroundSecondary};
  opacity: 0.5;
  padding: ${p => p.theme.spacings.l}px;
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

export const TopNavigation = (): React.ReactElement => {
  return (
    <TopNavigationContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Wide>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </Wide>
    </TopNavigationContainer>
  );
};
