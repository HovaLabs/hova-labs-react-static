import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import hovalinStrings from "./Photos/hovalin-strings.jpg";
import hovalinStringsTuners from "./Photos/hovalin-strings-tuners.jpg";
import {
  ContainerContent,
  ContainerFlex,
  ContainerWithBorder,
} from "../../../components/Container";

export const InstallStrings: React.FC<{}> = () => (
  <ContainerWithBorder>
    <ContainerFlex>
      <ContainerContent flexL="50">
        <Text typography="headingLarge">5</Text>
        <Text typography="headingSmall">Install Strings</Text>
        <br />
      </ContainerContent>
    </ContainerFlex>
    <ContainerFlex>
      <ContainerContent flexL="50">
        <img width="100%" src={hovalinStrings} alt="strings on bridge" />
      </ContainerContent>
      <ContainerContent flexL="50">
        <img
          width="100%"
          src={hovalinStringsTuners}
          alt="strings on tuning pegs"
        />
      </ContainerContent>
      <ContainerContent flexL="100">
        Feed the strings through the hole at the base of the violin, through the
        hole at the top of the neck, and then through the tuning peg.
      </ContainerContent>
    </ContainerFlex>
  </ContainerWithBorder>
);
