import React from "react";
import { createStyledComponent } from "@hova-labs/bento-box-web";

const StyledPath = createStyledComponent("path")(c => ({
  fill: c.theme.colors.primary
}));

export const Logo = () => (
  <svg
    x="0px"
    y="0px"
    viewBox="0 0 1440 1440"
    enableBackground="new 0 0 1440 1440"
  >
    <StyledPath d="M118.9,118.9v1202.3h1202.3V118.9H118.9z M1111.1,1162.8l-226.3-114.1l1.7-219.6l-434.4,1.7l105.7,51.9 l-1.7,280.1l-221.3-114.1V277.2l224.6,109.1l-1.7,217.9h327v-327L1111.1,388V1162.8z" />
  </svg>
);
