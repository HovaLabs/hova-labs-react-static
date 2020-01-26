import React from "react";
import styled from "styled-components";
import { Text } from "@hova-labs/bento-box-web";

import theHovas from "../../media/the-hovas.png";

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
  ${p =>
    p.theme.responsiveStyle("width", {
      s: `100%`,
      l: "50%",
    })}
`;
// ABOUT END

export const About = () => (
  <AboutContainer>
    <AboutTextContainer>
      <div>
        <Text typography="headingSmall">ABOUT</Text>
      </div>
      <div>
        <Text typography="headingLarge">The Hovas</Text>
      </div>
      <div>
        <Text>
          We are two Nebraska nerds currently living in the SF Bay Area who use
          diverse backgrounds in art and science to buld scalable projects.
        </Text>
      </div>
    </AboutTextContainer>
    <AboutImageContainer>
      <AboutImageFiller />
      <AboutImage />
    </AboutImageContainer>
  </AboutContainer>
);
