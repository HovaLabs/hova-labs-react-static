import styled from "styled-components";
import { Button } from "@hova-labs/bento-box-web";

export const BlogTag = styled(Button).attrs({ variant: "secondary" })`
  margin: 10px;
  &:first-of-type: {
    margin-left: 0;
  }
`;
