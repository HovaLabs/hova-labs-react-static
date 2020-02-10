import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { OuterContainer } from "./BlogListItemStyles";

interface EventProps {
  post: {
    title: string;
    id: number;
  };
}

const BlogListItem = ({ post }: EventProps): React.ReactElement => (
  <OuterContainer>
    <Text>{post.title}</Text>
  </OuterContainer>
);

export default BlogListItem;
