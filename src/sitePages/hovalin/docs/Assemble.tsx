import React from "react";
import { Text } from "../../../components";
import assembly from "./Photos/assembly.gif";
import assemblyMulti from "./Photos/assembly-multi-part-chamber.gif";
import { HovalinSelectionContext } from "./HovalinSelectionContext";
import {
  ContainerFlex,
  ContainerContent,
  ContainerWithBorder,
} from "../../../components/Container";

export const Assemble: React.FC<{}> = () => {
  const { isMultiPieceChamber } = React.useContext(HovalinSelectionContext);
  return (
    <div id="assemble">
      <ContainerWithBorder>
        <ContainerFlex>
          <ContainerContent flexXL="50">
            <div>
              <Text typography="headingLarge">5</Text>
            </div>
            <div>
              <Text typography="headingSmall">Assemble</Text>
            </div>
          </ContainerContent>
        </ContainerFlex>
        <ContainerFlex>
          <ContainerContent flexXL="50">
            <img
              src={isMultiPieceChamber ? assemblyMulti : assembly}
              alt="hovalin assembly"
              width="100%"
            />
          </ContainerContent>
          <ContainerContent flexXL="50">
            {isMultiPieceChamber
              ? "Assemble the chamber by joining the top, middle, and bottom with the notch pieces."
              : ""}
            <br />
            <br />
            Fit together the neck and chamber pieces. Once the pieces are locked
            together, insert the carbon fiber rod through the top of the neck
            down through the chamber so that it is flush with the top of the
            neck.
          </ContainerContent>
        </ContainerFlex>
      </ContainerWithBorder>
    </div>
  );
};
