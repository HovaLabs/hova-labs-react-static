import styled from "styled-components";
import { Button } from "../../../components";

export const SelectButton = styled(Button)(
  (p) => `
  border: 1px solid ${p.theme.colors.onBackground};
`,
);
