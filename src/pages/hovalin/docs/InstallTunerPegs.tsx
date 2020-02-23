import React from "react";
import pegEndBreakoff from "./Photos/peg-end-breakoff.gif";
import pegInsert from "./Photos/peg-insert.gif";
import pegTighten from "./Photos/peg-tighten.gif";

export const InstallTunerPegs = (): React.ReactElement => (
  <div>
    <div>
      <div>4</div>
      <div>Install Tuner Pegs</div>
    </div>
    <div>
      <img src={pegEndBreakoff} alt="peg end break off" />
      <div>Snap off the screw holes on the tuner pegs using a wrench.</div>
    </div>
    <div>
      <img src={pegInsert} alt="peg insert" />
      <div>
        Insert the tuning pegs into the violin neck as shown in the picture.
      </div>
    </div>
    <div>
      <img src={pegTighten} alt="peg tighten" />
      <div>
        Once the pegs are pushed into place, screw in the top piece, first by
        hand, then using a 10mm hex wrench.
      </div>
    </div>
  </div>
);
