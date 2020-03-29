import styled from "styled-components";

export const ButtonContainer = styled.div`
  > * {
    margin-left: ${p => p.theme.spacings.l}px;
    margin-right: ${p => p.theme.spacings.l}px;
  }
  > *:first-child {
    margin-left: 0;
  }
  > *:last-child {
    margin-right: 0;
  }
`;
