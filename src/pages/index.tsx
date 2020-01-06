import React from "react";
import styled from "styled-components";
import { Text } from "@hova-labs/bento-box-web";
import hovalin from "../media/hovalin-64.jpg";
import theHovas from "../media/the-hovas.png";

const Container = styled("div")``;

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
      l: "100px",
    })}
`;

const Hero = styled("img").attrs({ src: hovalin })`
  width: 100%;
  min-width: 600px;
  background-position: center center;
  background-repeat: no-repeat;
`;
// HERO END

// ABOUT START
const AboutContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("margin-top", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

const AboutImageContainer = styled("div")`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutImageFiller = styled("div")`
  flex: 1;
`;

const AboutImage = styled("img").attrs({ src: theHovas })`
  width: 100%;
  flex: 1;
  min-width: 500px;
  background-position: center center;
  background-repeat: no-repeat;
`;

const AboutTextContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("position", {
      s: "relative",
      l: "absolute",
    })}
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xxl}px`,
    })}
  padding-bottom: 0;
`;
// ABOUT END

// SERVICES START

// SERVICES END

// EVENTS START
// EVENTS END

// LATEST BLOG START
// LATEST BLOG END

// COPYRIGHT START
// COPYRIGHT END

export default (): React.ReactElement => (
  <Container>
    <HeroContainer>
      <HeroText>HOVA LABS</HeroText>
      <Hero />
    </HeroContainer>
    <AboutContainer>
      <AboutTextContainer>
        <div>
          <Text typography="headingSmall">ABOUT</Text>
        </div>
        <div>
          <Text typography="headingLarge">The Hovas</Text>
        </div>
        <div style={{ maxWidth: 300 }}>
          <Text>
            We are two Nebraska nerds currently living in the SF Bay Area who
            use diverse backgrounds in art and science to buld scalable
            projects.
          </Text>
        </div>
      </AboutTextContainer>
      <AboutImageContainer>
        <AboutImageFiller />
        <AboutImage />
      </AboutImageContainer>
    </AboutContainer>
  </Container>
);
