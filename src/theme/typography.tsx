import { Colors } from "./colors";

const fontWeight = {
  thin: "100",
  extraLight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  extraBold: "800",
  heavy: "900"
};

const letterSpacingDenominator = {
  s: 32,
  m: 16,
  l: 8,
  xl: 4,
  none: 1
};

type ResponsiveValue = {
  s?: number;
  m?: number;
  l?: number;
  xl?: number;
};

type themeValue = number | string | ResponsiveValue;

export type TypographyValue = {
  color: keyof Colors;
  fontWeight: keyof typeof fontWeight;
  lineHeight: themeValue;
  fontSize: themeValue;
  letterSpacing?: number | keyof typeof letterSpacingDenominator;
};

export type Typography = {
  headingLarge: TypographyValue;
  headingMedium: TypographyValue;
  headingSmall: TypographyValue;
  bodyText: TypographyValue;
  buttonPrimary: TypographyValue;
  buttonSecondary: TypographyValue;
  buttonTertiary: TypographyValue;
};

export const typographyDefault: Typography = {
  headingLarge: {
    color: "primary",
    fontWeight: "bold",
    lineHeight: {
      s: 52,
      m: 60
    },
    fontSize: {
      s: 46,
      m: 52
    }
  },
  headingMedium: {
    color: "primary",
    fontWeight: "bold",
    lineHeight: {
      s: 24,
      m: 50
    },
    fontSize: {
      s: 20,
      m: 34
    }
  },
  headingSmall: {
    color: "primary",
    fontWeight: "normal",
    lineHeight: {
      s: 24,
      m: 24
    },
    fontSize: {
      s: 16,
      m: 20
    }
  },
  bodyText: {
    color: "primary",
    fontWeight: "normal",
    lineHeight: {
      s: 16,
      m: 24
    },
    fontSize: {
      s: 12,
      m: 16
    }
  },
  buttonPrimary: {
    color: "backgroundPrimary",
    fontWeight: "bold",
    lineHeight: {
      s: 16,
      m: 24
    },
    fontSize: {
      s: 12,
      m: 16
    },
    letterSpacing: "xl"
  },
  buttonSecondary: {
    color: "primary",
    fontWeight: "bold",
    lineHeight: {
      s: 16,
      m: 24
    },
    fontSize: {
      s: 12,
      m: 16
    },
    letterSpacing: "xl"
  },
  buttonTertiary: {
    color: "primary",
    fontWeight: "bold",
    lineHeight: {
      s: 16,
      m: 24
    },
    fontSize: {
      s: 12,
      m: 16
    },
    letterSpacing: "xl"
  }
};
