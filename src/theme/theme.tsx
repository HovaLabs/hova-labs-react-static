import { Theme } from "@hova-labs/bento-box-web";

import { breakpoints } from "./breakpoints";
import { colorsLightTheme, colorsDarkTheme } from "./colors";
import { radii } from "./radii";
import { spacings } from "./spacings";
import { typography } from "./typography";

export const lightTheme: Theme = {
  name: "lightTheme",
  breakpoints,
  colors: colorsLightTheme,
  radii,
  spacings,
  typography
};

export const darkTheme: Theme = {
  name: "darkTheme",
  breakpoints,
  colors: colorsDarkTheme,
  radii,
  spacings,
  typography
};

export const themes = {
  lightTheme,
  darkTheme
};
