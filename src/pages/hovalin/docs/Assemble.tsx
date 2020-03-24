import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import assembly from "./Photos/assembly.gif";
import {
  ContainerFlex,
  ContainerHalfWidth,
  ContainerWithBorder,
} from "../../../components/Container";

export const Assemble: React.FC<{}> = () => (
  <ContainerWithBorder>
    <ContainerFlex>
      <ContainerHalfWidth>
        <Text typography="headingLarge">4</Text>
        <Text typography="headingSmall">Assemble</Text>
        <br />
      </ContainerHalfWidth>
    </ContainerFlex>
    <ContainerFlex>
      <ContainerHalfWidth>
        <img src={assembly} alt="hovalin assembly" />
      </ContainerHalfWidth>
      <ContainerHalfWidth>
        Fit together the neck and chamber pieces. Once the pieces are locked
        together, insert the carbon fiber rod through the top of the neck down
        through the chamber so that it is flush with the top of the neck.
      </ContainerHalfWidth>
    </ContainerFlex>
  </ContainerWithBorder>
);
