import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { NavigationFooter } from "../../components/Navigation/NavigationFooter";
import { ContainerWithBorder } from "../../components/Container/ContainerWithBorder";
import * as S from "./FourOhFourStyles";

export const FourOhFour: React.FC<{}> = () => (
  <>
    <ContainerWithBorder>
      <S.OuterContainer>
        <Text typography="headingLarge">404</Text>
        <Text typography="headingSmall">Not Found :(</Text>
      </S.OuterContainer>
    </ContainerWithBorder>
    <NavigationFooter />
  </>
);
