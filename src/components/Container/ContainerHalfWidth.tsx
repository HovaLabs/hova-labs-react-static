import styled from "styled-components";

export const ContainerHalfWidth = styled("div")`
  ${p =>
    p.theme.responsiveStyle("flex-basis", {
      s: "100%",
      l: "50%",
    })};
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `0`,
      l: `0 ${p.theme.spacings.xl}px`,
    })};
`;
