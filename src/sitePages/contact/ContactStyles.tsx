import styled from "styled-components";

export const EmailContainer = styled("div")`
  padding-top: ${(p) => `${p.theme.spacings.l}px`};
`;

export const OuterContainer = styled("div")`
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: center;
`;
