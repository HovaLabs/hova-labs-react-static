import React from "react";
import { createStyledComponent } from "@hova-labs/bento-box-web";

import { Link, Logo } from ".";

const TopNavigationContainer = createStyledComponent("div")(c => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  background: c.theme.colors.backgroundSecondary,
  padding: c.theme.spacings.l
}));

const LogoContainer = createStyledComponent("div")({
  width: 70,
  height: 70,
  justifySelf: "flex-start"
});

export const TopNavigation = (): React.ReactElement => (
  <TopNavigationContainer>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </div>
  </TopNavigationContainer>
);
