import styled from "styled-components";

export const EventGridInfoBox = styled("div")(p => ({
  display: "flex",
  flexDirection: "column",
  padding: `${p.theme.spacings.l}px`,
  background: p.theme.colors.primary,
}));

export const EventGridDateBox = styled("div")(p => ({
  display: "flex",
  flexDirection: "column",
  padding: `${p.theme.spacings.l}px`,
  background: p.theme.colors.backgroundTertiary,
}));