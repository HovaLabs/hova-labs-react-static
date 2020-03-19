import React from "react";
import { ContainerWithBorder } from "../../../components/Container/ContainerWithBorder";

export const Warning: React.FC<{}> = () => (
  <ContainerWithBorder>
    <div>warning icon</div>
    <div>
      Warning!!! As with any craft, violin making and 3D printing requires
      attention to safety. Do not attempt to build the violin without parental
      supervision. When in doubt, ask for assistance.
    </div>
  </ContainerWithBorder>
);
