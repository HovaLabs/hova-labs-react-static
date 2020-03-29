import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import pegEndBreakoff from "./Photos/peg-end-breakoff.gif";
import pegInsert from "./Photos/peg-insert.gif";
import pegTighten from "./Photos/peg-tighten.gif";
import { ContainerWithBorder } from "../../../components/Container/ContainerWithBorder";
import * as S from "./PrintPartsStyles";

export const InstallTunerPegs: React.FC<{}> = () => (
  <ContainerWithBorder>
    <div>
      <Text typography="headingLarge">4</Text>
      <Text typography="headingSmall">Install Tuner Pegs</Text>
    </div>
    <br />

    <S.OuterContainer>
      <S.ContentContainer>
        <img src={pegEndBreakoff} alt="peg end break off" width="100%" />
      </S.ContentContainer>
      <S.ContentContainer>
        Snap off the screw holes on the tuner pegs using a wrench.
      </S.ContentContainer>
    </S.OuterContainer>
    <S.OuterContainer>
      <S.ContentContainer>
        <img src={pegInsert} alt="peg insert" width="100%" />
      </S.ContentContainer>
      <S.ContentContainer>
        Insert the tuning pegs into the violin neck as shown in the picture.
      </S.ContentContainer>
    </S.OuterContainer>
    <S.OuterContainer>
      <S.ContentContainer>
        <img src={pegTighten} alt="peg tighten" width="100%" />
      </S.ContentContainer>
      <S.ContentContainer>
        Once the pegs are pushed into place, screw in the top piece, first by
        hand, then using a 10mm hex wrench.
      </S.ContentContainer>
    </S.OuterContainer>
  </ContainerWithBorder>
);
