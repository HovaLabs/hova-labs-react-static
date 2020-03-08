import styled from "styled-components";

export const OuterContainer = styled("div")`
  display: grid;
  ${p =>
    p.theme.responsiveStyle("grid-gap", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
`;
