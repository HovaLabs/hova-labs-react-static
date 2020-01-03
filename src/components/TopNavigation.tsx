import React from "react";
import {
  DimensionsContext,
  createStyledComponent
} from "@hova-labs/bento-box-web";

import { Link, Logo } from ".";

const TopNavigationContainer = createStyledComponent("div")(c => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  background: c.theme.colors.backgroundSecondary,
  opacity: 0.5,
  padding: c.theme.spacings.l,
  position: "relative",
  zIndex: 1000
}));

const LogoContainer = createStyledComponent("div")({
  width: {
    s: 38,
    l: 70
  },
  height: {
    s: 38,
    l: 70
  },
  justifySelf: "flex-start"
});

export const TopNavigation = (): React.ReactElement => {
  const { breakpoint } = React.useContext(DimensionsContext);
  return (
    <TopNavigationContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <div>
        {["l", "xl"].includes(breakpoint) ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </>
        ) : null}
      </div>
    </TopNavigationContainer>
  );
};
