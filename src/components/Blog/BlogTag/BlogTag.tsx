import React from "react";

type BlogTagProps = {
  title: string;
  onClick: () => string;
};

export const BlogTag = ({
  title,
  onClick,
}: BlogTagProps): React.ReactElement => {
  return (
    <button onClick={onClick} type="button">
      {title}
    </button>
  );
};
