import styled from "styled-components";

export const TopNavBump = styled.div`
  height: ${p =>
    p.theme.responsiveValue({
      s: 38 + p.theme.spacings.xl * 2,
      l: 70 + p.theme.spacings.xl * 2,
    })(p)}px;
`;

export const BlogStyles = styled.div``;
