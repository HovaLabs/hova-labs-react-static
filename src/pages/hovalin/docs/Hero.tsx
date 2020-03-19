import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { Button } from "../../../components";
import { routes } from "../../../routes";
import { ContainerWithBorder } from "../../../components/Container/ContainerWithBorder";

export const Hero: React.FC<{}> = () => (
  <ContainerWithBorder>
    <Text typography="headingLarge">Hovalin</Text>
    <div>
      <Button
        href={routes.HOVALIN_4_4_FILES}
        onPress={() => {}}
        title="Download v4.0.0 .stl files"
      />
      <Button
        href={routes.HOVALIN_4_4_CAD}
        onPress={() => {}}
        title="Check out the CAD"
      />
      <Button
        href={routes.HOVALIN_REDDIT}
        onPress={() => {}}
        title="Discuss on Reddit"
      />
    </div>
  </ContainerWithBorder>
);
