import React from "react";
import styled from "styled-components";
import { Link as LinkLib } from "@reach/router";
import { DimensionsContext } from "@hova-labs/bento-box-web";

import { Link, Logo } from ".";

interface TopNavigationContainerProps {
  readonly scrolled: boolean;
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
    background: ${p => p.theme.colors.backgroundSecondary};
    opacity: ${p => (p.scrolled ? 1 : 0.5)};
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

export const TopNavigation = (): React.ReactElement => {
  const { breakpoint } = React.useContext(DimensionsContext);

  const isScrolled = (): boolean =>
    document.body.getBoundingClientRect().top +
      (["s", "m"].includes(breakpoint) ? 16 : 32) <
    0;

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
    <TopNavigationContainer scrolled={scrolled}>
      <div>
        <LinkLib to="/">
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </LinkLib>
        <Wide>
          {/* <Link to="/">Home</Link> */}
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/store">Store</Link>
          <Link to="/contact">Contact</Link>
        </Wide>
      </div>
    </TopNavigationContainer>
  );
};
