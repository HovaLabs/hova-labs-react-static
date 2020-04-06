import React from "react";
import styled from "styled-components";
import { Text } from "@hova-labs/bento-box-web";
import { TitlePrimary } from "../../components/Title/TitlePrimary/TitlePrimary";
import theHovas from "./the-hovas.png";

import {
  ContainerWithBorder,
  ContainerFlex,
  ContainerContent,
} from "../../components/Container";

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

const HovaCentered = styled("div")`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const TheHovas = styled("img").attrs({
  src: theHovas,
})`
  align-self: flex-end;
  ${(p) =>
    p.theme.responsiveStyle("bottom", {
      s: `-${p.theme.spacings.l}px`,
      l: `-${p.theme.spacings.xl}px`,
    })}
  min-width: 250px;
  max-width: 350px;
  position: relative;
  width: 100%;
`;

export const About: React.FC<{}> = () => (
  <ContainerWithBorder>
    <ContainerFlex>
      <ContainerContent flexL="50">
        <TitlePrimary subtitle="About" title="The Hovas" />
        <Text>
          We are two Nebraska nerds currently living in the SF Bay Area who use
          diverse backgrounds in art and science to build scalable projects.
        </Text>
      </ContainerContent>
      <ContainerContent flexL="50">
        <HovaCentered>
          <TheHovas />
        </HovaCentered>
      </ContainerContent>
    </ContainerFlex>
  </ContainerWithBorder>
);
