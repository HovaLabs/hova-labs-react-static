import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import hovalinStrings from "./Photos/hovalin-strings.jpg";
import hovalinStringsTuners from "./Photos/hovalin-strings-tuners.jpg";
import { ContainerWithBorder } from "../../../components/Container/ContainerWithBorder";

export const InstallStrings: React.FC<{}> = () => (
  <ContainerWithBorder>
    <div>
      <Text typography="headingLarge">5</Text>
      <Text typography="headingSmall">Install Strings</Text>
    </div>
    <br />
    <div>
      <img width="100%" src={hovalinStrings} alt="strings on bridge" />
      <img
        width="100%"
        src={hovalinStringsTuners}
        alt="strings on tuning pegs"
      />
      <div>
        Feed the strings through the hole at the base of the violin, through the
        hole at the top of the neck, and then through the tuning peg.
      </div>
    </div>
  </ContainerWithBorder>
);
