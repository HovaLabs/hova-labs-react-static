import styled from "styled-components";
import { getTopNavHeight } from "../../components/TopNavigation/TopNavigationStyles";

export const Container = styled.div`
  margin-top: ${getTopNavHeight}px;
  display: grid;
  ${p =>
    p.theme.responsiveStyle("grid-template-columns", {
      s: "1fr",
      l: "2fr 1fr",
    })}
  grid-column-gap: ${p => p.theme.spacings.xl}px;
  ${p =>
    p.theme.responsiveStyle("grid-row-gap", {
      s: `${p.theme.spacings.xl}px`,
      l: `${p.theme.spacings.xxl}px`,
    })}
`;
