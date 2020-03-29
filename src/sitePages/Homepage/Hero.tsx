import React from "react";
import styled from "styled-components";
import { ContainerWithBorder } from "../../components/Container/ContainerWithBorder";

// HERO START
const HeroContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled("div")`
  position: absolute;
  color: ${(p) => p.theme.colors.onSurface1};
  ${(p) =>
    p.theme.responsiveStyle("font-size", {
      s: "50px",
      l: "114px",
    })}
  ${(p) =>
    p.theme.responsiveStyle("letter-spacing", {
      s: "10px",
      l: "20px",
    })}
  text-align: center;
  ${(p) =>
    p.theme.responsiveStyle("line-height", {
      s: "50px",
      l: "114px",
    })}
`;

export const Hero: React.FC<{}> = () => (
  <ContainerWithBorder backgroundImage="https://www.fillmurray.com/200/300">
    <HeroContainer>
      <HeroText>HOVA LABS</HeroText>
    </HeroContainer>
  </ContainerWithBorder>
);
