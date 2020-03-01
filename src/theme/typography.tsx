import { css } from "styled-components";
import { FontWeights, Typography, Colors } from "@hova-labs/bento-box-web";

interface TypographyProps {
  color: keyof Colors;
}

export const typography: Typography = {
  headingLarge: css`
    ${p => css`
      color: ${p.theme.colors.onSurface};
      ${p.theme.responsiveStyle("font-size", {
        s: "35px",
        m: "70px",
      })}
      line-height: 120%;
    `}
  `,
  headingMedium: css<TypographyProps>`
    ${p => css`
      color: ${p.color || p.theme.colors.onSurface};
      ${p.theme.responsiveStyle("font-size", {
        s: "25px",
        m: "50px",
      })}
      line-height: 120%;
    `}
  `,
  headingSmall: css`
    ${p => css`
      color: ${p.theme.colors.onSurface};
      ${p.theme.responsiveStyle("font-size", {
        s: "20px",
        m: "24px",
      })}
    `}
  `,
  bodyText: css`
    ${p => css<TypographyProps>`
      color: ${p.theme.colors.onSurface};
      font-weight: ${FontWeights.normal};
      ${p.theme.responsiveStyle("font-size", {
        s: "16px",
        m: "24px",
      })}
      line-height: 150.5%
    `}
  `,
  buttonText: css`
    ${p => css`
      color: ${p.theme.colors.onSurface};
      ${p.theme.responsiveStyle("font-size", {
        s: "16px",
        m: "24px",
      })}
    `}
  `,
};
