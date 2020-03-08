import { css } from "styled-components";
import { FontWeights, Typography, Colors } from "@hova-labs/bento-box-web";

interface TypographyProps {
  color: keyof Colors;
}

const fontFamily = "Josefin Sans, sans-serif";

export const typography: Typography = {
  headingLarge: css<TypographyProps>`
    ${p => css<TypographyProps>`
      font-family: ${fontFamily};
      color: ${p.theme.colors.onSurface1};
      ${p.theme.responsiveStyle("font-size", {
        s: "35px",
        m: "46px",
        l: "70px",
      })}
      line-height: 120%;
    `}
  `,
  headingMedium: css<TypographyProps>`
    ${p => css<TypographyProps>`
      font-family: ${fontFamily};
      color: ${p.color || p.theme.colors.onSurface1};
      ${p.theme.responsiveStyle("font-size", {
        s: "25px",
        m: "32px",
        l: "50px",
      })}
      line-height: 120%;
    `};
  `,
  headingSmall: css<TypographyProps>`
    ${p => css<TypographyProps>`
      font-family: ${fontFamily};
      color: ${p.theme.colors.onSurface1};
      ${p.theme.responsiveStyle("font-size", {
        s: "20px",
        m: "22px",
        l: "30px",
      })}
    `}
  `,
  bodyText: css<TypographyProps>`
    ${p => css<TypographyProps>`
      font-family: ${fontFamily};
      color: ${p.color ? p.color : p.theme.colors.onSurface1};
      font-weight: ${FontWeights.normal};
      ${p.theme.responsiveStyle("font-size", {
        s: "16px",
        m: "18px",
        l: "24px",
      })}
      line-height: 150.5%
    `}
  `,
  buttonText: css<TypographyProps>`
    ${p => css<TypographyProps>`
      font-family: ${fontFamily};
      color: ${p.theme.colors.onSurface1};
      ${p.theme.responsiveStyle("font-size", {
        s: "16px",
        m: "18px",
        l: "24px",
      })}
    `}
  `,
};
