import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { NavigationFooter } from "../components/Navigation/NavigationFooter";
import { ContainerWithBorder } from "../components/Container/ContainerWithBorder";
import * as S from "./404Styles";

export const FourOhFour: React.FC<{}> = () => (
  <>
    <ContainerWithBorder lineVariant="hero">
      <S.OuterContainer>
        <Text typography="headingLarge">404</Text>
        <Text typography="headingSmall">Not Found :(</Text>
      </S.OuterContainer>
    </ContainerWithBorder>
    <NavigationFooter />
  </>
);

export default FourOhFour;
