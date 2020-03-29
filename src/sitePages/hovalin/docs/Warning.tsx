import React from "react";
import { IoMdWarning } from "react-icons/io";
import { Icon, Text } from "@hova-labs/bento-box-web";
import { ContainerWithBorder } from "../../../components/Container/ContainerWithBorder";

export const Warning: React.FC<{}> = () => (
  <ContainerWithBorder>
    <Icon size={32} IconComponent={IoMdWarning} />
    <Text typography="bodyText">
      Warning!!! As with any craft, violin making and 3D printing requires
      attention to safety. Do not attempt to build the violin without parental
      supervision. When in doubt, ask for assistance.
    </Text>
  </ContainerWithBorder>
);
