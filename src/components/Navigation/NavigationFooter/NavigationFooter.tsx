import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { ContainerWithBorder } from "../../Container/ContainerWithBorder";
import * as S from "./NavigationFooterStyles";
// COPYRIGHT END

export const NavigationFooter = (): React.ReactElement => (
  <ContainerWithBorder isFooter>
    <S.OuterContainer>
      <Text typography="headingSmall">
        {`Copyright Hova Labs 2019 - ${new Date().getFullYear().toString()}`}
      </Text>
    </S.OuterContainer>
  </ContainerWithBorder>
);
