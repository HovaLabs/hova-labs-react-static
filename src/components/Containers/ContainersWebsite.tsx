import styled from "styled-components";

export const ContainersWebsite = styled("div")`
  background: ${p => p.theme.colors.background};
  overflow: hidden;
  height: calc(100vh - 64px);
  padding-top: 0;
  > div {
    height: 100%;
    overflow: scroll;
    ${p =>
      p.theme.responsiveStyle("padding-left", {
        s: `${p.theme.backgroundGutters.s}px`,
        l: `${p.theme.backgroundGutters.l}px`,
      })}
    ${p =>
      p.theme.responsiveStyle("padding-right", {
        s: `${p.theme.backgroundGutters.s}px`,
        l: `${p.theme.backgroundGutters.l}px`,
      })}
    > div {
      ${p =>
        p.theme.responsiveStyle("padding-bottom", {
          s: `${p.theme.backgroundGutters.s}px`,
          l: `${p.theme.backgroundGutters.l}px`,
        })}
    }
  }
`;
