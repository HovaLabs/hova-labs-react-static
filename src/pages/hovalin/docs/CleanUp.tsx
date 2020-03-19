import React from "react";
import sanding from "./Photos/sanding.gif";
import { ContainerWithBorder } from "../../../components/Container/ContainerWithBorder";

export const CleanUp: React.FC<{}> = () => (
  <ContainerWithBorder>
    <div>
      <div>3</div>
      <div>Clean Up</div>
    </div>
    <div>
      <img src={sanding} alt="sanding" />
      <div>
        Sanding the fretboard will help get rid of any buzzing overtones. It can
        also give the violin a more finished look. I've had good results by
        sanding at 100 grit, then moving on to 300, and then 600 grit sandpaper.
        For extra credit, sand the rest of the surfaces as well.
      </div>
    </div>
  </ContainerWithBorder>
);
