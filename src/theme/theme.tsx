import { Theme } from "@hova-labs/bento-box-web";

import { breakpoints } from "./breakpoints";
import { colorsLightTheme, colorsDarkTheme } from "./colors";
import { radii } from "./radii";
import { spacings } from "./spacings";
import { typography } from "./typography";

const lightTheme: Theme = {
  name: "lightTheme",
  breakpoints,
  colors: colorsLightTheme,
  radii,
  spacings,
  typography
};

const darkTheme: Theme = {
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
