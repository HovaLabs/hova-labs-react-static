import React from "react";
import styled from "styled-components";
import { Text } from "@hova-labs/bento-box-web";
import { ContainerWithBorder } from "../../components/Container/ContainerWithBorder";

// COPYRIGHT START
const CopyrightContainer = styled("div")`
${p =>
  p.theme.responsiveStyle("padding", {
    s: `${p.theme.spacings.l}px`,
    l: `${p.theme.spacings.xxl}px`,
  })}
background-color: ${p => p.theme.colors.surface};
`;

// COPYRIGHT END

export const Copyright = (): React.ReactElement => (
  <ContainerWithBorder>
    <CopyrightContainer>
      <Text typography="headingSmall">
        {`Copyright Hova Labs 2019 - ${new Date().getFullYear().toString()}`}
      </Text>
    </CopyrightContainer>
  </ContainerWithBorder>
);
