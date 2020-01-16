import { css } from "styled-components";
import { FontWeights, Typography, Colors } from "@hova-labs/bento-box-web";

interface TypographyProps {
  color: keyof Colors;
}

export const typography: Typography = {
  headingLarge: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      font-weight: ${FontWeights.bold};
      ${p.theme.responsiveStyle("font-size", {
        s: "46px",
        m: "52px",
      })}
    `}
  `,
  headingMedium: css<TypographyProps>`
    ${p => css`
      color: ${p.color || p.theme.colors.primary};
      font-weight: ${FontWeights.bold};
      ${p.theme.responsiveStyle("font-size", {
        s: "20px",
        m: "34px",
      })}
    `}
  `,
  headingSmall: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      font-weight: ${FontWeights.bold};
      ${p.theme.responsiveStyle("font-size", {
        s: "16px",
        m: "20px",
      })}
    `}
  `,
  bodyText: css`
    ${p => css<TypographyProps>`
      color: ${p.theme.colors.primary};
      font-weight: ${FontWeights.normal};
      ${p.theme.responsiveStyle("font-size", {
        s: "12px",
        m: "16px",
      })}
    `}
  `,
  buttonPrimary: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      font-weight: ${FontWeights.bold};
      ${p.theme.responsiveStyle("font-size", {
        s: "12px",
        m: "16px",
      })}
    `}
  `,
  buttonSecondary: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      font-weight: ${FontWeights.bold};
      ${p.theme.responsiveStyle("font-size", {
        s: "12px",
        m: "16px",
      })}
    `}
  `,
  buttonTertiary: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      font-weight: ${FontWeights.bold};
      ${p.theme.responsiveStyle("font-size", {
        s: "12px",
        m: "16px",
      })}
    `}
  `,
};
