import { DefaultTheme } from "styled-components";
import { responsiveStyle, responsiveValue } from "@hova-labs/bento-box-web";

import { breakpoints } from "./breakpoints";
import { colorsLightTheme, colorsDarkTheme } from "./colors";
import { radii } from "./radii";
import { BackgroundGutters, backgroundGutters } from "./backgroundGutters";
import { spacings } from "./spacings";
import { typography } from "./typography";

interface HovaLabsTheme extends DefaultTheme {
  backgroundGutters: BackgroundGutters;
}

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
  width: 0,
  height: 0,
  breakpoint: "s",
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
  width: 0,
  height: 0,
  breakpoint: "s",
};

export const themes = {
  lightTheme,
  darkTheme,
};
