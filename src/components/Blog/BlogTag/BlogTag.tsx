import styled from "styled-components";
import { Button } from "@hova-labs/bento-box-web";

export const BlogTag = styled(Button).attrs({ variant: "secondary" })`
  margin: ${p => `${p.theme.spacings.m}px`};
  :first-of-type {
    margin-left: 0;
  }
`;
