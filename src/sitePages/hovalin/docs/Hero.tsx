import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import ReactGA from "react-ga";
import { Button } from "../../../components";
import { routes } from "../../../routes";
import {
  ContainerContent,
  ContainerWithBorder,
} from "../../../components/Container";
import hero from "./hero.jpg";
import * as S from "./HeroStyles";

export const Hero: React.FC<{}> = () => (
  <ContainerWithBorder
    backgroundImage={hero}
    backgroundImageStyles={{ opacity: ".3" }}
  >
    <ContainerContent flexXL="100">
      <Text typography="headingLarge">Hovalin Docs</Text>
      <S.ButtonContainer>
        <Button
          href={routes.HOVALIN_4_4_FILES}
          onPress={() => {
            ReactGA.event({
              category: "Hovalin_Docs",
              action: "Download_v4_STL_files",
            });
          }}
          title="Download v4.0.0 .stl files"
        />
      </S.ButtonContainer>
      <S.ButtonContainer>
        <Button
          href={routes.HOVALIN_4_4_CAD}
          onPress={() => {
            ReactGA.event({
              category: "Hovalin_Docs",
              action: "View_CAD_v4",
            });
          }}
          title="Check out the CAD"
        />
      </S.ButtonContainer>
      <S.ButtonContainer>
        <Button
          href={routes.HOVALIN_REDDIT}
          onPress={() => {
            ReactGA.event({
              category: "Hovalin_Docs",
              action: "Discuss_on_Reddit",
            });
          }}
          title="Discuss on Reddit"
        />
      </S.ButtonContainer>
    </ContainerContent>
  </ContainerWithBorder>
);
