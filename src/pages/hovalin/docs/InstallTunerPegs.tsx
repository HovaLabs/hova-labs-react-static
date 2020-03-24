import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import pegEndBreakoff from "./Photos/peg-end-breakoff.gif";
import pegInsert from "./Photos/peg-insert.gif";
import pegTighten from "./Photos/peg-tighten.gif";
import {
  ContainerFlex,
  ContainerHalfWidth,
  ContainerWithBorder,
} from "../../../components/Container";

export const InstallTunerPegs: React.FC<{}> = () => (
  <ContainerWithBorder>
    <ContainerFlex>
      <ContainerHalfWidth>
        <Text typography="headingLarge">4</Text>
        <Text typography="headingSmall">Install Tuner Pegs</Text>
      </ContainerHalfWidth>
    </ContainerFlex>
    <br />
    <ContainerFlex>
      <ContainerHalfWidth>
        <img src={pegEndBreakoff} alt="peg end break off" width="100%" />
      </ContainerHalfWidth>
      <ContainerHalfWidth>
        Snap off the screw holes on the tuner pegs using a wrench.
      </ContainerHalfWidth>
    </ContainerFlex>
    <ContainerFlex>
      <ContainerHalfWidth>
        <img src={pegInsert} alt="peg insert" width="100%" />
      </ContainerHalfWidth>
      <ContainerHalfWidth>
        Insert the tuning pegs into the violin neck as shown in the picture.
      </ContainerHalfWidth>
    </ContainerFlex>
    <ContainerFlex>
      <ContainerHalfWidth>
        <img src={pegTighten} alt="peg tighten" width="100%" />
      </ContainerHalfWidth>
      <ContainerHalfWidth>
        Once the pegs are pushed into place, screw in the top piece, first by
        hand, then using a 10mm hex wrench.
      </ContainerHalfWidth>
    </ContainerFlex>
  </ContainerWithBorder>
);
