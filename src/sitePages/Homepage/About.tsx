import React from "react";
import styled from "styled-components";
import { Text } from "../../components";
import { TitlePrimary } from "../../components/Title/TitlePrimary/TitlePrimary";
import theHovas from "./the-hovas.png";

import {
  ContainerWithBorder,
  ContainerFlex,
  ContainerContent,
} from "../../components/Container";

const HovaCentered = styled("div")`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const TheHovas = styled("img").attrs({
  src: theHovas,
})`
  ${(p) =>
    p.theme.responsiveStyle("bottom", {
      s: "-20px",
      l: "-48px",
    })}
  min-width: 250px;
  max-width: 350px;
  position: relative;

  width: 100%;
`;

export const About: React.FC<{}> = () => (
  <ContainerWithBorder>
    <ContainerFlex>
      <ContainerContent flexXL="50">
        <TitlePrimary subtitle="About" title="The Hovas" />
        <Text>
          We are two Nebraska nerds currently living in the SF Bay Area who use
          diverse backgrounds in art and science to build scalable projects.
        </Text>
      </ContainerContent>
      <ContainerContent flexXL="50">
        <HovaCentered>
          <TheHovas />
        </HovaCentered>
      </ContainerContent>
    </ContainerFlex>
  </ContainerWithBorder>
);
