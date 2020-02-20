import styled from "styled-components";

export const OuterContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("padding-top", {
      s: `${p.theme.topNavClearance.s}px`,
      l: `${p.theme.topNavClearance.l}px`,
    })}
`;
