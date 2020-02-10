import { css } from "styled-components";
import { FontWeights, Typography, Colors } from "@hova-labs/bento-box-web";

interface TypographyProps {
  color: keyof Colors;
}

export const typography: Typography = {
  headingLarge: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      ${p.theme.responsiveStyle("font-size", {
        s: "35px",
        m: "70px",
      })}
    `}
  `,
  headingMedium: css<TypographyProps>`
    ${p => css`
      color: ${p.color || p.theme.colors.primary};
      ${p.theme.responsiveStyle("font-size", {
        s: "25px",
        m: "50px",
      })}
    `}
  `,
  headingSmall: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      ${p.theme.responsiveStyle("font-size", {
        s: "20px",
        m: "24px",
      })}
    `}
  `,
  bodyText: css`
    ${p => css<TypographyProps>`
      color: ${p.theme.colors.primary};
      font-weight: ${FontWeights.normal};
      ${p.theme.responsiveStyle("font-size", {
        s: "16px",
        m: "24px",
      })}
      line-height: 150.5%
    `}
  `,
  buttonPrimary: css`
    ${p => css`
      color: ${p.theme.colors.accentPrimary};
      ${p.theme.responsiveStyle("font-size", {
        s: "16px",
        m: "24px",
      })}
    `}
  `,
  buttonSecondary: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      ${p.theme.responsiveStyle("font-size", {
        s: "16px",
        m: "24px",
      })}
    `}
  `,
  buttonTertiary: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      ${p.theme.responsiveStyle("font-size", {
        s: "16px",
        m: "24px",
      })}
    `}
  `,
};
