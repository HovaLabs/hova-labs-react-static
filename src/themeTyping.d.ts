import { DefaultTheme } from "styled-components";

import {
  Breakpoints,
  Colors,
  Radii,
  Spacings,
  Typography,
} from "@hova-labs/bento-box-web";
import { BackgroundGutters } from "../types";

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
    typography: Typography;
    responsiveStyle: (styleKey: string, styleObject: any) => any;
    responsiveValue: (styles: any) => (props: Props) => any;
  }
}
