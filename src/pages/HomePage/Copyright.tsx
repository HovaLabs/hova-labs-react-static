import React from "react";
import styled from "styled-components";
import { Text } from "@hova-labs/bento-box-web";

// COPYRIGHT START
const CopyrightContainer = styled("div")`
${p =>
  p.theme.responsiveStyle("margin-top", {
    s: `${p.theme.spacings.l}px`,
    l: `${p.theme.spacings.xl}px`,
  })}
${p =>
  p.theme.responsiveStyle("padding", {
    s: `${p.theme.spacings.l}px`,
    l: `${p.theme.spacings.xxl}px`,
  })}
background-color: ${p => p.theme.colors.backgroundTertiary};
`;

// COPYRIGHT END

export const Copyright = () => (
  <CopyrightContainer>
    <Text typography="headingSmall">
      {`Copyright Hova Labs 2019 - ${new Date().getFullYear().toString()}`}
    </Text>
  </CopyrightContainer>
);
