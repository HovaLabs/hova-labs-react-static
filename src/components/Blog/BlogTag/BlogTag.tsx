import React from "react";
import { Link } from "@reach/router";
import { Text } from "@hova-labs/bento-box-web";
import { routes } from "../../../routes";

export interface BlogTag {
  onPress: () => void;
  title: string;
}

export const BlogTag: React.FC<BlogTag> = ({ onPress, title }) => {
  return (
    <Link to={`${routes.BLOG}#${title}`}>
      <Text
        color={
          window.location.hash.replace("#", "") === title
            ? "onBackground"
            : "primary"
        }
        typography="bodyText"
        onPress={onPress}
      >
        {` #${title} `}
      </Text>
    </Link>
  );
};
