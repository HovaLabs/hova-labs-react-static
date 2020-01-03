import React from "react";
import { createStyledComponent } from "@hova-labs/bento-box-web";
import hovalin from "../media/hovalin-64.jpg";

const HeroWrapper = createStyledComponent("div")(c => ({
  position: "relative",
  top: {
    s: -38 - c.theme.spacings.l * 2,
    l: -70 - c.theme.spacings.l * 2
  },
  width: "100%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const Hero = createStyledComponent("img")({
  width: "100%",
  minWidth: 600,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat"
});

export default () => (
  <HeroWrapper>
    <Hero src={hovalin} />
  </HeroWrapper>
);
