import React from "react";
import styled from "styled-components";

import hovalin from "../../media/hovalin-64.jpg";

// HERO START
const HeroContainer = styled("div")`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled("div")`
  position: absolute;
  color: ${p => p.theme.colors.onSurface};
  ${p =>
    p.theme.responsiveStyle("font-size", {
      s: "50px",
      l: "114px",
    })}
  ${p =>
    p.theme.responsiveStyle("letter-spacing", {
      s: "10px",
      l: "20px",
    })}
  text-align: center;
  ${p =>
    p.theme.responsiveStyle("line-height", {
      s: "50px",
      l: "114px",
    })}
`;

const HeroImage = styled("img").attrs({ src: hovalin })`
  width: 100%;
  min-width: 600px;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0.5;
`;
// HERO END

export const Hero = (): React.ReactElement => (
  <HeroContainer>
    <HeroImage />
    <HeroText>HOVA LABS</HeroText>
  </HeroContainer>
);
