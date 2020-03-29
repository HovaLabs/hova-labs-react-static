import { DefaultTheme } from 'styled-components';
import {
  Breakpoints,
  Colors,
  Radii,
  Spacings,
  Typography,
} from '@hova-labs/bento-box-web';
import { BackgroundGutters, Frames } from './types';

interface Props {
  theme: DefaultTheme;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'lightTheme' | 'darkTheme';
    backgroundGutters: BackgroundGutters;
    breakpoints: Breakpoints;
    colors: Colors;
    frames: Frames;
    radii: Radii;
    spacings: Spacings;
    typography: Typography;
    responsiveStyle: (styleKey: string, styleObject: any) => any;
    responsiveValue: (styleObject: any) => (props: any) => any;
    width: number;
    height: number;
    breakpoint: keyof Breakpoints;
  }
}
