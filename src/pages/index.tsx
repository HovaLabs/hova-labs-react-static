import React from "react";
import { createStyledComponent, Text } from "@hova-labs/bento-box-web";
import hovalin from "../media/hovalin-64.jpg";
import theHovas from "../media/the-hovas.png";

const Container = createStyledComponent("div")(c => ({
  position: "relative",
  top: {
    s: -38 - c.theme.spacings.l * 2,
    l: -70 - c.theme.spacings.l * 2
  }
}));

// HERO START
const HeroContainer = createStyledComponent("div")({
  width: "100%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const HeroText = createStyledComponent("div")({
  position: "absolute"
});
const Hero = createStyledComponent("img")({
  width: "100%",
  minWidth: 600,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat"
});
// HERO END

// ABOUT START

const AboutContainer = createStyledComponent("div")(c => ({
  backgroundColor: c.theme.colors.backgroundSecondary,
  marginTop: c.theme.spacings.l
}));

const AboutImageContainer = createStyledComponent("div")({
  width: "100%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const AboutImageFiller = createStyledComponent("div")({ flex: 1 });
const AboutImage = createStyledComponent("img")({
  width: "100%",
  flex: 1,
  minWidth: 500,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat"
});

const AboutTextContainer = createStyledComponent("div")(c => ({
  position: ["l", "xl"].includes(c.dimensions.breakpoint)
    ? "absolute"
    : "relative",
  padding: {
    s: c.theme.spacings.l,
    l: c.theme.spacings.xxl
  },
  paddingBottom: 0
}));
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
      <HeroText>
        <Text typography="headingLarge">HOVA LABS</Text>
      </HeroText>
      <Hero src={hovalin} />
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
        <AboutImage src={theHovas} />
      </AboutImageContainer>
    </AboutContainer>
  </Container>
);
