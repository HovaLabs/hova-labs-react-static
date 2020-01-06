import { DefaultTheme } from "styled-components";
import { responsiveStyle } from "@hova-labs/bento-box-web";

import { breakpoints } from "./breakpoints";
import { colorsLightTheme, colorsDarkTheme } from "./colors";
import { radii } from "./radii";
import { spacings } from "./spacings";
import { typography } from "./typography";

const lightTheme: DefaultTheme = {
  name: "lightTheme",
  breakpoints,
  colors: colorsLightTheme,
  radii,
  spacings,
  typography,
  responsiveStyle,
};

const darkTheme: DefaultTheme = {
  name: "darkTheme",
  breakpoints,
  colors: colorsDarkTheme,
  radii,
  spacings,
  typography,
  responsiveStyle,
};

export const themes = {
  lightTheme,
  darkTheme,
};
