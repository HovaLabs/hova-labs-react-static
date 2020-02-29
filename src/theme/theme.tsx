import { DefaultTheme } from "styled-components";
import { responsiveStyle, responsiveValue } from "@hova-labs/bento-box-web";

import { breakpoints } from "./breakpoints";
import { frames } from "./frames";
import { colorsLightTheme, colorsDarkTheme } from "./colors";
import { radii } from "./radii";
import { backgroundGutters } from "./backgroundGutters";
import { spacings } from "./spacings";
import { typography } from "./typography";
import { topNavClearance } from "./topNavClearance";

export type HovaLabsTheme = DefaultTheme;

const lightTheme: HovaLabsTheme = {
  name: "lightTheme",
  backgroundGutters,
  breakpoints,
  colors: colorsLightTheme,
  frames,
  radii,
  spacings,
  topNavClearance,
  typography,
  responsiveStyle,
  responsiveValue,
  width: 0,
  height: 0,
  breakpoint: "l",
};

const darkTheme: HovaLabsTheme = {
  name: "darkTheme",
  backgroundGutters,
  breakpoints,
  colors: colorsDarkTheme,
  frames,
  radii,
  spacings,
  topNavClearance,
  typography,
  responsiveStyle,
  responsiveValue,
  width: 0,
  height: 0,
  breakpoint: "l",
};

export const themes = {
  lightTheme,
  darkTheme,
};
