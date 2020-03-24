import styled from "styled-components";

export const ContainerFullWidth = styled("div")`
  ${p =>
    p.theme.responsiveStyle("flex-basis", {
      s: "100%",
      l: "100%",
    })};
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `0`,
      l: `0 ${p.theme.spacings.xl}px`,
    })};
`;
