import styled from "styled-components";

export const ContainerFlex = styled("div")`
  min-width: 0;
  width: 100%;
  > * {
    min-width: 0;
    width: 100%;
  }
  ${(p) =>
    p.theme.responsiveStyle("display", {
      s: "block",
      l: "flex",
    })};
  flex-wrap: wrap;
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.s}px`,
      l: `${p.theme.spacings.l}px`,
    })}
`;
