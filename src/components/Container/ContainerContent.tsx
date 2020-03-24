import styled from "styled-components";

interface ContainerContentProps {
  readonly flexL: string;
}

export const ContainerContent = styled("div")<ContainerContentProps>`
  ${p =>
    p.theme.responsiveStyle("flex-basis", {
      s: "100%",
      l: `${p.flexL}%`,
    })};
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `0`,
      l: `0 ${p.theme.spacings.xl}px`,
    })};
`;
