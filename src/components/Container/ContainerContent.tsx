import styled from "styled-components";

interface ContainerContentProps {
  readonly flexXL?: string;
  readonly flexL?: string;
  readonly flexM?: string;
  readonly disablePadding?: boolean;
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
`;
