import { css } from "styled-components";
import { FontWeights, Typography, Colors } from "@hova-labs/bento-box-web";

interface TypographyProps {
  color: keyof Colors;
}

const fontFamily = "Oxygen, sans-serif";

export const typography: Typography = {
  headingLarge: css<TypographyProps>`
    display: block !important;
    font-family: ${fontFamily};
    ${(p) => p.theme.themedColor("color", "onSurface1")}
    ${(p) =>
      p.theme.responsiveStyle("font-size", {
        s: "35px",
        m: "46px",
        l: "70px",
      })}
    line-height: 120%;
  `,
  headingMedium: css<TypographyProps>`
    display: block;
    font-family: ${fontFamily};
    ${(p) => p.theme.themedColor("color", "onSurface1")}
    ${(p) =>
      p.theme.responsiveStyle("font-size", {
        s: "25px",
        m: "32px",
        l: "50px",
      })}
    line-height: 120%;
  `,
  headingSmall: css<TypographyProps>`
    display: block;
    font-family: ${fontFamily};
    ${(p) => p.theme.themedColor("color", "onSurface1")}
    ${(p) =>
      p.theme.responsiveStyle("font-size", {
        s: "20px",
        m: "22px",
        l: "30px",
      })}
  `,
  bodyText: css<TypographyProps>`
    ${(p) => p.theme.themedColor("color", "onSurface1")}
    display: block;
    font-family: ${fontFamily};
    font-weight: ${FontWeights.normal};
    ${(p) =>
      p.theme.responsiveStyle("font-size", {
        s: "16px",
        m: "18px",
        l: "24px",
      })}
    line-height: 150.5%;
  `,
  buttonText: css<TypographyProps>`
    font-family: ${fontFamily};
    ${(p) => p.theme.themedColor("color", "onSurface1")}
    ${(p) =>
      p.theme.responsiveStyle("font-size", {
        s: "16px",
        m: "18px",
        l: "24px",
      })}
  `,
};
