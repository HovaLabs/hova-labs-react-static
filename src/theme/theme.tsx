import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import {
  Colors,
  responsiveStyle,
  responsiveValue,
} from "@hova-labs/bento-box-web";

import { breakpoints } from "./breakpoints";
import { frames } from "./frames";
import { colorsLightTheme, colorsDarkTheme } from "./colors";
import { radii } from "./radii";
import { backgroundGutters } from "./backgroundGutters";
import { spacings } from "./spacings";
import { typography } from "./typography";

export type HovaLabsTheme = DefaultTheme;

const themeColors = {
  lightTheme: colorsLightTheme,
  darkTheme: colorsDarkTheme,
};

const themedColor = (
  key: string,
  val: keyof Colors,
): FlattenInterpolation<ThemeProps<HovaLabsTheme>> => css`
  ${(p) => {
    if (p.theme.initialized) {
      console.log("all done");
      return `${key}: ${p.theme.colors[val]};`;
    }
    console.log("not done yet");
    return `
      ${key}: ${p.theme.themeColors.lightTheme[val]};
      @media (prefers-color-scheme: dark) {
        ${key}: ${p.theme.themeColors.darkTheme[val]};
      }
    `;
  }}
`;

const lightTheme: HovaLabsTheme = {
  name: "lightTheme",
  backgroundGutters,
  breakpoints,
  colors: colorsLightTheme,
  frames,
  radii,
  spacings,
  typography,
  responsiveStyle,
  responsiveValue,
  width: 0,
  height: 0,
  breakpoint: "l",
  initialized: false,
  themeColors,
  themedColor,
};

const darkTheme: HovaLabsTheme = {
  name: "darkTheme",
  backgroundGutters,
  breakpoints,
  colors: colorsDarkTheme,
  frames,
  radii,
  spacings,
  typography,
  responsiveStyle,
  responsiveValue,
  width: 0,
  height: 0,
  breakpoint: "l",
  initialized: false,
  themeColors,
  themedColor,
};

export const themes = {
  lightTheme,
  darkTheme,
};
