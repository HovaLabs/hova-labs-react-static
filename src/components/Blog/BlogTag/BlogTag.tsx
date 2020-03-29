import React from "react";
import { Link } from "gatsby";
import { Text } from "@hova-labs/bento-box-web";
import { routes } from "../../../routes";

export interface BlogTag {
  onPress: () => void;
  title: string;
}

export const BlogTag: React.FC<BlogTag> = ({ onPress, title }) => {
  const color =
    typeof window === "undefined" ||
    window.location.hash.replace("#", "") === title
      ? "onBackground"
      : "primary";

  return (
    <Link to={`${routes.BLOG}#${title}`}>
      <Text color={color} typography="bodyText" onPress={onPress}>
        {` #${title} `}
      </Text>
    </Link>
  );
};
