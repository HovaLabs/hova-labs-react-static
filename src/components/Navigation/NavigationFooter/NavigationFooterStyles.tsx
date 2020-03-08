import styled from "styled-components";

// COPYRIGHT START
export const OuterContainer = styled("div")`
${p =>
  p.theme.responsiveStyle("padding", {
    s: `${p.theme.spacings.l}px`,
    l: `${p.theme.spacings.xxl}px`,
  })}
background-color: ${p => p.theme.colors.surface1};
`;
