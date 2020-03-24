import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import pegEndBreakoff from "./Photos/peg-end-breakoff.gif";
import pegInsert from "./Photos/peg-insert.gif";
import pegTighten from "./Photos/peg-tighten.gif";
import {
  ContainerFlex,
  ContainerContent,
  ContainerWithBorder,
} from "../../../components/Container";

export const InstallTunerPegs: React.FC<{}> = () => (
  <ContainerWithBorder>
    <ContainerFlex>
      <ContainerContent flexL="50">
        <Text typography="headingLarge">4</Text>
        <Text typography="headingSmall">Install Tuner Pegs</Text>
      </ContainerContent>
    </ContainerFlex>
    <br />
    <ContainerFlex>
      <ContainerContent flexL="50">
        <img src={pegEndBreakoff} alt="peg end break off" width="100%" />
      </ContainerContent>
      <ContainerContent flexL="50">
        Snap off the screw holes on the tuner pegs using a wrench.
      </ContainerContent>
    </ContainerFlex>
    <ContainerFlex>
      <ContainerContent flexL="50">
        <img src={pegInsert} alt="peg insert" width="100%" />
      </ContainerContent>
      <ContainerContent flexL="50">
        Insert the tuning pegs into the violin neck as shown in the picture.
      </ContainerContent>
    </ContainerFlex>
    <ContainerFlex>
      <ContainerContent flexL="50">
        <img src={pegTighten} alt="peg tighten" width="100%" />
      </ContainerContent>
      <ContainerContent flexL="50">
        Once the pegs are pushed into place, screw in the top piece, first by
        hand, then using a 10mm hex wrench.
      </ContainerContent>
    </ContainerFlex>
  </ContainerWithBorder>
);
