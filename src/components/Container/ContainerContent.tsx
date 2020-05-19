import styled from "styled-components";

interface ContainerContentProps {
  readonly flexXL?: string;
  readonly flexL?: string;
  readonly flexM?: string;
  readonly disablePadding?: boolean;
  readonly variant?: "left" | "right";
}

export const ContainerContent = styled("div")<ContainerContentProps>`
  min-width: 0;
  ${(p) =>
    p.theme.responsiveStyle("flex-basis", {
      s: "100%",
      m: `${p.flexM ? p.flexM : p.flexXL}%`,
      l: `${p.flexL}%`,
      xl: `${p.flexXL}%`,
    })};
  ${(p) =>
    p.disablePadding
      ? null
      : p.theme.responsiveStyle("padding", {
          s: "0",
          l: `0 ${p.theme.spacings.xl}px`,
        })};
  ${(p) => {
    switch (p.variant) {
      case "right":
        return p.theme.responsiveStyle("padding", {
          s: `0 ${p.theme.spacings.l}px ${p.theme.spacings.l}px ${p.theme.spacings.l}px`,
          l: `0 ${p.theme.spacings.xl}px ${p.theme.spacings.xl}px ${p.theme
            .spacings.xl / 2}px`,
        });
      case "left":
        return p.theme.responsiveStyle("padding", {
          s: `0 ${p.theme.spacings.l}px ${p.theme.spacings.l}px ${p.theme.spacings.l}px`,
          l: `0 ${p.theme.spacings.xl / 2}px ${p.theme.spacings.xl}px ${
            p.theme.spacings.xl
          }px`,
        });
      default:
        return p.theme.responsiveStyle("padding", {
          s: `0 ${p.theme.spacings.l}px ${p.theme.spacings.l}px ${p.theme.spacings.l}px`,
          l: `0 ${p.theme.spacings.xl}px ${p.theme.spacings.xl}px ${p.theme.spacings.xl}px`,
        });
    }
  }}
`;
