import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { ContainerWithBorder } from "../../Container/ContainerWithBorder";
import * as S from "./NavigationFooterStyles";

export const NavigationFooter: React.FC<{}> = () => (
  <ContainerWithBorder>
    <S.OuterContainer>
      <Text typography="bodyText">
        {`Copyright Hova Labs 2019 - ${new Date().getFullYear().toString()}`}
      </Text>
    </S.OuterContainer>
  </ContainerWithBorder>
);
