import styled from "styled-components";
import { Button } from "../Button";

export const Modal = styled("div")(
  (p) => `
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${p.theme.colors.modalBackground};
  z-index: 9000;
  display: flex;
  justify-content: center;
  align-items: center;
`,
);

export const ModalContent = styled("div")(
  (p) => `
  max-width: 500px;
  padding: 32px;
  margin: 32px;
  background: ${p.theme.colors.surface1};
  position: relative;

`,
);

export const CloseButton = styled("div")(
  (p) => `
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 16px;
  cursor: pointer;
`,
);

export const ButtonContainer = styled("div")`
  display: flex;
  > * :not(:last-child) {
    margin-right: 32px;
  }
`;

export const Spacer = styled("div")`
  height: 32px;
`;

export const SelectButton = styled(Button)(
  (p) => `
  border: 1px solid ${p.theme.colors.onBackground};
`,
);
