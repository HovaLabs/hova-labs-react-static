import styled, { css } from "styled-components";
import { ButtonProps } from "./ButtonProps";

const buttonTransitionTime = "350ms";
const borderWidth = 4;
const buttonVariantStyles = (p: any): any => {
  switch (p.variant) {
    case "secondary": {
      return css`
        ${p.theme.themedColor("background-color", "onPrimary")}
        ${p.theme.themedColor("border-color", "primary")}
        padding: ${p.theme.spacings.l}px;
      `;
    }
    case "tertiary": {
      return css`
        background-color: transparent;
        padding: ${p.theme.spacings.l}px;
      `;
    }
    // aka primary
    default: {
      return css`
        ${p.theme.themedColor("background-color", "primary")}
        padding: ${p.theme.spacings.l}px;
      `;
    }
  }
};

export const Button = styled("div")<
  Omit<ButtonProps, "onPress"> & { onClick: (e: React.SyntheticEvent) => void }
>`
  ${buttonVariantStyles}
  display: inline-block;
  box-sizing: border-box;
  align-items: center;

  border-radius: ${(p) => p.theme.radii.none}px;

  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};

  transition: all ${buttonTransitionTime};
  > * {
    transition: all ${buttonTransitionTime};
  }
`;

// Determine the "color" prop based on which variant of the button it is
const buttonTextVariantColor = (
  p: any,
): "primary" | "onBackground" | "onPrimary" => {
  switch (p.variant) {
    case "secondary": {
      return "onBackground";
    }
    case "tertiary": {
      return "onBackground";
    }
    // aka primary
    default: {
      return "onPrimary";
    }
  }
};
interface ButtonTextProps {
  readonly disabled: ButtonProps["disabled"];
  readonly variant: ButtonProps["variant"];
}

export const Text = styled("div")<ButtonTextProps>`
  ${(p) => p.theme.typography.buttonText}
  ${(p) => p.theme.themedColor("color", buttonTextVariantColor(p))}
`;
