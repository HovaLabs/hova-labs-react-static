import React from "react";
import styled from "styled-components";

import hovalin from "../../media/hovalin-64.jpg";

// HERO START
const HeroContainer = styled("div")`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled("div")`
  position: absolute;
  color: ${p => p.theme.colors.primary};
  ${p =>
    p.theme.responsiveStyle("font-size", {
      s: "50px",
      l: "114px",
    })}
  ${p =>
    p.theme.responsiveStyle("letter-spacing", {
      s: "10px",
      l: "10px",
    })}
  text-align: center;
`;

const HeroImage = styled("img").attrs({ src: hovalin })`
  width: 100%;
  min-width: 600px;
  background-position: center center;
  background-repeat: no-repeat;
`;
// HERO END

export const Hero = () => (
  <HeroContainer>
    <HeroText>HOVA LABS</HeroText>
    <HeroImage />
  </HeroContainer>
);
