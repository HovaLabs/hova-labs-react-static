import styled from "styled-components";

export const Link = styled("a")`
  ${(p) => p.theme.themedColor("color", "primary")}
`;

export const Title = styled("div")`
  display: flex;
  & > svg {
    margin-right: ${(p) => `${p.theme.spacings.l}px`};
  }
`;
