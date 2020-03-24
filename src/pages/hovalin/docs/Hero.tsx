import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { Button } from "../../../components";
import { routes } from "../../../routes";
import {
  ContainerFullWidth,
  ContainerWithBorder,
} from "../../../components/Container";
import hero from "../../../media/hovalin-docs/hero.jpg";
import * as S from "./HeroStyles";

export const Hero: React.FC<{}> = () => (
  <ContainerWithBorder
    backgroundImage={hero}
    backgroundImageStyles={{ opacity: ".3" }}
  >
    <ContainerFullWidth>
      <Text typography="headingLarge">Hovalin Docs</Text>
      <S.ButtonContainer>
        <Button
          href={routes.HOVALIN_4_4_FILES}
          onPress={() => {}}
          title="Download v4.0.0 .stl files"
        />
      </S.ButtonContainer>
      <S.ButtonContainer>
        <Button
          href={routes.HOVALIN_4_4_CAD}
          onPress={() => {}}
          title="Check out the CAD"
        />
      </S.ButtonContainer>
      <S.ButtonContainer>
        <Button
          href={routes.HOVALIN_REDDIT}
          onPress={() => {}}
          title="Discuss on Reddit"
        />
      </S.ButtonContainer>
    </ContainerFullWidth>
  </ContainerWithBorder>
);
