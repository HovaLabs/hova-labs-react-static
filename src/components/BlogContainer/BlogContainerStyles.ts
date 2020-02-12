import styled from "styled-components";

export const Container = styled.div`
  ${p =>
    p.theme.responsiveStyle("margin-top", {
      s: `${p.theme.topNavClearance.s}px`,
      l: `${p.theme.topNavClearance.l}px`,
    })}
`;
