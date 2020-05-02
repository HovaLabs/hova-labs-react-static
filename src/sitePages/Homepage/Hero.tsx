import React from "react";
import styled from "styled-components";
import heroImage from "./hero_homepage.jpg";
import { ContainerWithBorder } from "../../components/Container/ContainerWithBorder";
import { HovaLabs } from "../../components";

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

const HeroText = styled(HovaLabs)`
  position: absolute;
`;

export const Hero: React.FC<{}> = () => (
  <ContainerWithBorder backgroundImage={heroImage} lineVariant="hero">
    <HeroContainer>
      <HeroText />
    </HeroContainer>
  </ContainerWithBorder>
);
