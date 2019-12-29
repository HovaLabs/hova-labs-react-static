import { Breakpoints, breakpointsDefault } from "./breakpoints";
import { Colors, colorsLightTheme, colorsDarkTheme } from "./colors";
import { Radii, radiiDefault } from "./radii";
import { Space, spaceDefault } from "./space";
import { Typography, typographyDefault } from "./typography";

export type Theme = {
  name: "lightTheme" | "darkTheme";
  breakpoints: Breakpoints;
  colors: Colors;
  radii: Radii;
  space: Space;
  typography: Typography;
};

export const lightTheme: Theme = {
  name: "lightTheme",
  breakpoints: breakpointsDefault,
  colors: colorsLightTheme,
  radii: radiiDefault,
  space: spaceDefault,
  typography: typographyDefault
};

export const darkTheme: Theme = {
  name: "darkTheme",
  breakpoints: breakpointsDefault,
  colors: colorsDarkTheme,
  radii: radiiDefault,
  space: spaceDefault,
  typography: typographyDefault
};

export const themes = {
  lightTheme,
  darkTheme
};
