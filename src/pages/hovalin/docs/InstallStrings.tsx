import React from "react";
import hovalinStrings from "./media/hovalin-strings.jpg";
import hovalinStringsTuners from "./media/hovalin-strings-tuners.jpg";

export const InstallStrings = (): React.ReactElement => (
  <div>
    <div>
      <div>6</div>
      <div>INSTALL STRINGS</div>
    </div>
    <div>
      <img src={hovalinStrings} alt="strings on bridge" />
      <img src={hovalinStringsTuners} alt="strings on tuning pegs" />
      <div>
        Feed the strings through the hole at the base of the violin, through the
        hole at the top of the neck, and then through the tuning peg.
      </div>
    </div>
  </div>
);
