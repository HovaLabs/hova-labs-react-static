import styled from "styled-components";

interface ContainerContentProps {
  readonly flexXL?: string;
  readonly flexL?: string;
  readonly flexM?: string;
}

export const ContainerContent = styled("div")<ContainerContentProps>`
  ${(p) =>
    p.theme.responsiveStyle("flex-basis", {
      s: "100%",
      m: `${p.flexM ? p.flexM : p.flexXL}%`,
      l: `${p.flexL}%`,
      xl: `${p.flexXL}%`,
    })};
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: "0",
      l: `0 ${p.theme.spacings.xl}px`,
    })};
`;
