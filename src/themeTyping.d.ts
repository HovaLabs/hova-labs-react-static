import { DefaultTheme } from "styled-components";

import {
  Breakpoints,
  Colors,
  Radii,
  Spacings,
  Typography,
} from "@hova-labs/bento-box-web";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "lightTheme" | "darkTheme";
    breakpoints: Breakpoints;
    colors: Colors;
    radii: Radii;
    spacings: Spacings;
    typography: Typography;
    responsiveStyle: (styleKey: string, styleObject: any) => any;
    responsiveValue: (styleObject: any) => any;
    width: number;
    height: number;
    breakpoint: keyof Breakpoints;
  }
}
