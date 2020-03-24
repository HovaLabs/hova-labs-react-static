import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import assembly from "./Photos/assembly.gif";
import {
  ContainerFlex,
  ContainerContent,
  ContainerWithBorder,
} from "../../../components/Container";

export const Assemble: React.FC<{}> = () => (
  <ContainerWithBorder>
    <ContainerFlex>
      <ContainerContent flexL="50">
        <Text typography="headingLarge">4</Text>
        <Text typography="headingSmall">Assemble</Text>
        <br />
      </ContainerContent>
    </ContainerFlex>
    <ContainerFlex>
      <ContainerContent flexL="50">
        <img src={assembly} alt="hovalin assembly" />
      </ContainerContent>
      <ContainerContent flexL="50">
        Fit together the neck and chamber pieces. Once the pieces are locked
        together, insert the carbon fiber rod through the top of the neck down
        through the chamber so that it is flush with the top of the neck.
      </ContainerContent>
    </ContainerFlex>
  </ContainerWithBorder>
);
