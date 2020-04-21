import React from "react";
import { Text } from "../../../components";
import sanding from "./Photos/sanding.gif";
import {
  ContainerFlex,
  ContainerContent,
  ContainerWithBorder,
} from "../../../components/Container";

export const CleanUp: React.FC<{}> = () => (
  <ContainerWithBorder>
    <ContainerFlex>
      <ContainerContent flexXL="50">
        <Text typography="headingLarge">3</Text>
        <Text typography="headingSmall">Clean Up</Text>
      </ContainerContent>
    </ContainerFlex>
    <br />
    <ContainerFlex>
      <ContainerContent flexXL="50">
        <img src={sanding} alt="sanding" width="100%" />
      </ContainerContent>
      <ContainerContent flexXL="50">
        Sanding the fretboard will help get rid of any buzzing overtones. It can
        also give the violin a more finished look. I've had good results by
        sanding at 100 grit, then moving on to 300, and then 600 grit sandpaper.
        For extra credit, sand the rest of the surfaces as well.
      </ContainerContent>
    </ContainerFlex>
  </ContainerWithBorder>
);
