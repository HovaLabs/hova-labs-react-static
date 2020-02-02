import { DefaultTheme } from "styled-components";
import { responsiveStyle, responsiveValue } from "@hova-labs/bento-box-web";

import { breakpoints } from "./breakpoints";
import { colorsLightTheme, colorsDarkTheme } from "./colors";
import { radii } from "./radii";
import { backgroundGutters } from "./backgroundGutters";
import { spacings } from "./spacings";
import { typography } from "./typography";

export type HovaLabsTheme = DefaultTheme;

const lightTheme: HovaLabsTheme = {
  name: "lightTheme",
  backgroundGutters,
  breakpoints,
  colors: colorsLightTheme,
  radii,
  spacings,
  typography,
  responsiveStyle,
  responsiveValue,
};

const darkTheme: HovaLabsTheme = {
  name: "darkTheme",
  backgroundGutters,
  breakpoints,
  colors: colorsDarkTheme,
  radii,
  spacings,
  typography,
  responsiveStyle,
  responsiveValue,
};

export const themes = {
  lightTheme,
  darkTheme,
};
