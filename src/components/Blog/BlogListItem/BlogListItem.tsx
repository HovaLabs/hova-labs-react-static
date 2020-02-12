import React from "react";
import { Button, Text } from "@hova-labs/bento-box-web";
import { BlogTag } from "../BlogTag/BlogTag";
import * as S from "./BlogListItemStyles";

interface EventProps {
  post: {
    title: string;
    id: number;
  };
}

const BlogListItem = ({ post }: EventProps): React.ReactElement => (
  <S.OuterContainer>
    <S.Image />
    <S.ContentContainer>
      <div>
        <BlogTag tag={{ name: "Food" }} onClick={() => {}} />
        <Text>15 Minute Read </Text>
      </div>
      <div>
        <Text>{post.title}</Text>
        <Button title="link" onPress={() => {}} />
      </div>
    </S.ContentContainer>
  </S.OuterContainer>
);

export default BlogListItem;
