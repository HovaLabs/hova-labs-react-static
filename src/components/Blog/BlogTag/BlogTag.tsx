import React from "react";
import { BlogTagType } from "../../types";

type BlogTagProps = {
  tag: BlogTagType;
  onClick: () => void;
};

export const BlogTag = ({ tag, onClick }: BlogTagProps): React.ReactElement => {
  return (
    <button onClick={onClick} type="button">
      {tag.name}
    </button>
  );
};
