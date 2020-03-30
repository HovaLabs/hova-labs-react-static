import React from "react";
import { Text } from "@hova-labs/bento-box-web";

export const TitlePrimary: React.FC<{
  subtitle: string;
  title: string;
}> = ({ subtitle, title }) => (
  <div>
    <Text typography="headingSmall">{subtitle}</Text>
    <Text typography="headingLarge">{title}</Text>
  </div>
);
