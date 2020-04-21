import React from "react";
import { Text } from "../../../components";
import hovalinStrings from "./Photos/hovalin-strings.jpg";
import hovalinStringsTuners from "./Photos/hovalin-strings-tuners.jpg";
import {
  ContainerContent,
  ContainerFlex,
  ContainerWithBorder,
} from "../../../components/Container";

export const InstallStrings: React.FC<{}> = () => (
  <div id="strings">
    <ContainerWithBorder>
      <ContainerFlex>
        <ContainerContent flexXL="50">
          <Text typography="headingLarge">5</Text>
          <Text typography="headingSmall">Install Strings</Text>
          <br />
        </ContainerContent>
      </ContainerFlex>
      <ContainerFlex>
        <ContainerContent flexXL="50">
          <img width="100%" src={hovalinStrings} alt="strings on bridge" />
          <br />
          <img
            width="100%"
            src={hovalinStringsTuners}
            alt="strings on tuning pegs"
          />
        </ContainerContent>
        <ContainerContent flexXL="50">
          Feed the strings through the hole at the base of the violin, through
          the hole at the top of the neck, and then through the tuning peg.
        </ContainerContent>
      </ContainerFlex>
    </ContainerWithBorder>
  </div>
);
