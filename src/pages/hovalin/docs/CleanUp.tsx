import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import sanding from "./Photos/sanding.gif";
import {
  ContainerFlex,
  ContainerHalfWidth,
  ContainerWithBorder,
} from "../../../components/Container";

export const CleanUp: React.FC<{}> = () => (
  <ContainerWithBorder>
    <ContainerFlex>
      <ContainerHalfWidth>
        <Text typography="headingLarge">3</Text>
        <Text typography="headingSmall">Clean Up</Text>
      </ContainerHalfWidth>
    </ContainerFlex>
    <br />
    <ContainerFlex>
      <ContainerHalfWidth>
        <img src={sanding} alt="sanding" width="100%" />
      </ContainerHalfWidth>
      <ContainerHalfWidth>
        Sanding the fretboard will help get rid of any buzzing overtones. It can
        also give the violin a more finished look. I've had good results by
        sanding at 100 grit, then moving on to 300, and then 600 grit sandpaper.
        For extra credit, sand the rest of the surfaces as well.
      </ContainerHalfWidth>
    </ContainerFlex>
  </ContainerWithBorder>
);
