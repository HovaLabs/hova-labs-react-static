import React from "react";
import styled from "styled-components";
import { Text } from "@hova-labs/bento-box-web";
import { ContainerWithBorder } from "../../components/Container/ContainerWithBorder";
import theHovas from "../../media/the-hovas.png";

const InnerContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AboutTextContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xxl}px`,
    })}
  ${p =>
    p.theme.responsiveStyle("padding-bottom", {
      s: `0`,
    })}
  max-width: 600px;
`;

const TheHovas = styled("img").attrs({ src: theHovas })`
  position: relative;
  ${p =>
    p.theme.responsiveStyle("bottom", {
      s: `-${p.theme.spacings.l}px`,
      l: `-${p.theme.spacings.xl}px`,
    })}
  height: 240px;
  max-width: 240px;
  align-self: flex-end;
  margin-left: auto;
`;

export const About: React.FC<{}> = () => (
  <ContainerWithBorder>
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
      <TheHovas />
    </InnerContainer>
  </ContainerWithBorder>
);
