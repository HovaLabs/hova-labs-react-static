import styled from "styled-components";

export const WebsiteContainer = styled("div")`
  position: absolute;
  top: 0;
  /* bottom: 0; no bottom to maintain our infinite height and bottom padding */
  left: 0;
  right: 0;
  background: ${p => p.theme.colors.backgroundPrimary};
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
`;
