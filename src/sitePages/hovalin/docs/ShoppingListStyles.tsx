import styled from "styled-components";

export const Link = styled("a")`
  color: ${(p) => p.theme.colors.primary};
`;

export const Title = styled("div")`
  display: flex;
  & > svg {
    margin-right: ${(p) => `${p.theme.spacings.l}px`};
  }
`;
