import React from "react";
import styled from "styled-components";

interface TextProps {
  typography?:
    | "headingLarge"
    | "headingMedium"
    | "headingSmall"
    | "bodyText"
    | "buttonText";
}

export const Text = styled("div")<TextProps>`
  ${(p) =>
    p.theme.typography[
      (p.typography || "bodyText") as NonNullable<TextProps["typography"]>
    ]}
  display: inline;
`;
