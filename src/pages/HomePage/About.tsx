import React from "react";
import styled from "styled-components";
import { Text } from "@hova-labs/bento-box-web";
import { ContainerWithBorder } from "../../components/Container/ContainerWithBorder";
import theHovas from "../../media/the-hovas.png";

// ABOUT START

const InnerContainer = styled("div")`
  height: 400px;
  ${p =>
    p.theme.responsiveStyle("display", {
      s: `block`,
      l: "flex",
    })}
  max-width: 1200px;
  background-size: contain;
  background-repeat: no-repeat;
  ${p =>
    p.theme.responsiveStyle("background-position", {
      s: `bottom center`,
      l: `bottom right`,
    })}
  ${p =>
    p.theme.responsiveStyle("padding-bottom", {
      s: `300px`,
      l: "0",
    })}
`;

const AboutTextContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xxl}px`,
    })}
  max-width: 600px;
`;
// ABOUT END

export const About: React.FC<{}> = () => (
  <ContainerWithBorder
    backgroundImage={theHovas}
    backgroundImageStyles={{
      maxHeight: 300,
      marginTop: "auto",
      maxWidth: 400,
      marginLeft: "auto",
      opacity: 0.5,
    }}
  >
    <InnerContainer>
      <AboutTextContainer>
        <div>
          <Text typography="headingSmall">ABOUT</Text>
        </div>
        <div>
          <Text typography="headingLarge">The Hovas</Text>
        </div>
        <div>
          <Text>
            We are two Nebraska nerds currently living in the SF Bay Area who
            use diverse backgrounds in art and science to buld scalable
            projects.
          </Text>
        </div>
      </AboutTextContainer>
    </InnerContainer>
  </ContainerWithBorder>
);
