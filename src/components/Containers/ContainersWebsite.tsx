import styled from "styled-components";

export const ContainersWebsite = styled("div")`
  background: ${p => p.theme.colors.background};
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.backgroundGutters.s}px`,
      l: `${p.theme.backgroundGutters.l}px`,
    })}
`;
