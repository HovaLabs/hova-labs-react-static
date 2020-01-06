import { Link as LinkLib } from "@reach/router";
import styled from "styled-components";

export const Link = styled(LinkLib)`
  text-decoration: none;
  margin-left: ${p => p.theme.spacings.xl}px;
  ${p => p.theme.typography.headingMedium}
`;
