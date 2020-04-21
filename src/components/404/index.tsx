import React from "react";
import { Text } from "..";
import { ContainerWithBorder } from "../Container/ContainerWithBorder";
import * as S from "./FourOhFourStyles";
import Layout from "../layout";

export const FourOhFour: React.FC = () => (
  <Layout>
    <ContainerWithBorder>
      <S.OuterContainer>
        <Text typography="headingLarge">404</Text>
        <Text typography="headingSmall">Not Found :(</Text>
      </S.OuterContainer>
    </ContainerWithBorder>
  </Layout>
);
