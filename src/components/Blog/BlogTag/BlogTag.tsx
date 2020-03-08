import React from "react";
import { Text } from "@hova-labs/bento-box-web";

export interface BlogTag {
  onPress: () => void;
  title: string;
}

export const BlogTag: React.FC<BlogTag> = ({ onPress, title }) => {
  return (
    <Text color="primary" typography="bodyText" onPress={onPress}>
      {`#${title} `}
    </Text>
  );
};
