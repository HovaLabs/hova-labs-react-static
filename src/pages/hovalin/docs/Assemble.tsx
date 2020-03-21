import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import assembly from "./Photos/assembly.gif";
import { ContainerWithBorder } from "../../../components/Container/ContainerWithBorder";

export const Assemble: React.FC<{}> = () => (
  <ContainerWithBorder>
    <div>
      <Text typography="headingLarge">4</Text>
      <Text typography="headingSmall">Assemble</Text>
    </div>
    <br />
    <div>
      <img src={assembly} alt="hovalin assembly" />
      <div>
        Fit together the neck and chamber pieces. Once the pieces are locked
        together, insert the carbon fiber rod through the top of the neck down
        through the chamber so that it is flush with the top of the neck.
      </div>
    </div>
  </ContainerWithBorder>
);
