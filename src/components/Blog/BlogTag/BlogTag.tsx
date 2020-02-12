import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { BlogTagType } from "../../types";
import * as S from "./BlogTagStyles";

type BlogTagProps = {
  tag: BlogTagType;
  onClick: () => void;
};

export const BlogTag = ({ tag, onClick }: BlogTagProps): React.ReactElement => {
  return (
    <S.Button onClick={onClick} type="button">
      <Text typography="buttonText">{tag.name}</Text>
    </S.Button>
  );
};
