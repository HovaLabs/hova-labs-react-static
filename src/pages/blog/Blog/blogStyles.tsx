import styled from "styled-components";

export const OuterContainer = styled("div")`
  display: grid;
  ${p =>
    p.theme.responsiveStyle("grid-gap", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
  br {
  }
  h1 {
    ${p => p.theme.typography.headingLarge}
  }
  h2 {
    ${p => p.theme.typography.headingMedium}
  }
  h3 {
    ${p => p.theme.typography.headingSmall}
  }
  p {
    ${p => p.theme.typography.bodyText}
  }
`;
