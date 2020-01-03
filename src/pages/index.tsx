import React from "react";
import { createStyledComponent } from "@hova-labs/bento-box-web";
import hovalin from "../media/hovalin-64.jpg";

const HeroWrapper = createStyledComponent("div")({
  width: "100%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const Hero = createStyledComponent("img")({
  width: "100%",
  minWidth: 600,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat"
});

export default () => (
  <div>
    <HeroWrapper>
      <Hero src={hovalin} />
    </HeroWrapper>
    <div>Hova Labs</div>
  </div>
);
