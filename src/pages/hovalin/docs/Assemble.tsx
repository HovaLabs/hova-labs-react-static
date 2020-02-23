import React from "react";
import assembly from "./media/assembly.gif";

export const Assemble = (): React.ReactElement => (
  <div>
    <div>
      <div>5</div>
      <div>Assemble</div>
    </div>
    <div>
      <img src={assembly} alt="hovalin assembly" />
      <div>
        Fit together the neck and chamber pieces. Once the pieces are locked
        together, insert the carbon fiber rod through the top of the neck down
        through the chamber so that it is flush with the top of the neck.
      </div>
    </div>
  </div>
);
