import React from "react";
import styled from "styled-components";
import { Text } from "@hova-labs/bento-box-web";

import { ContainerWithBorder } from "../../components/Container/ContainerWithBorder";

const InnerContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
`;

const AboutTextContainer = styled("div")`
  flex: 1;
  min-width: 360px;
  max-width: 600px;
`;

const HovaCentered = styled("div")`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const TheHovas = styled("img").attrs({
  src: "https://www.fillmurray.com/200/300",
})`
  position: relative;
  ${(p) =>
    p.theme.responsiveStyle("bottom", {
      s: `-${p.theme.spacings.xl}px`,
      l: `-${p.theme.spacings.xxl}px`,
    })}
  height: 336px;
  min-width: 336px;
  align-self: flex-end;
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
      <HovaCentered>
        <TheHovas />
      </HovaCentered>
    </InnerContainer>
  </ContainerWithBorder>
);
