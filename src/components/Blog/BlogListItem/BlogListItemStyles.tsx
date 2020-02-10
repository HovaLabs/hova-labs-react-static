import styled from "styled-components";

export const OuterContainer = styled("div")(p => ({
  display: "flex",
  padding: `${p.theme.spacings.l}px`,
}));
