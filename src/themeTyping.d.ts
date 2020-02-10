import { DefaultTheme } from "styled-components";

import {
  Breakpoints,
  Colors,
  Radii,
  Spacings,
  Typography,
} from "@hova-labs/bento-box-web";
import { BackgroundGutters, TopNavClearance } from "../types";

interface Props {
  theme: DefaultTheme;
}

declare module "styled-components" {
  export interface DefaultTheme {
    name: "lightTheme" | "darkTheme";
    backgroundGutters: BackgroundGutters;
    breakpoints: Breakpoints;
    colors: Colors;
    radii: Radii;
    spacings: Spacings;
    topNavClearance: TopNavClearance;
    typography: Typography;
    responsiveStyle: (styleKey: string, styleObject: any) => any;
    responsiveValue: (styles: any) => (props: Props) => any;
  }
}
