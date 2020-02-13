import React from "react";
import { Button } from "@hova-labs/bento-box-web";
import { BlogTagType } from "../../types";

type BlogTagProps = {
  tag: BlogTagType;
  onPress: () => void;
};

export const BlogTag = ({ tag, onPress }: BlogTagProps): React.ReactElement => {
  return <Button onPress={onPress} title={tag.name} />;
};
