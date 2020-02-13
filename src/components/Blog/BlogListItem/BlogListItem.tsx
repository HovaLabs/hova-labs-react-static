import React from "react";
import { Link } from "@reach/router";
import { Button, Text } from "@hova-labs/bento-box-web";
import { BlogTag } from "../BlogTag/BlogTag";
import * as S from "./BlogListItemStyles";

export interface BlogManifest {
  title: string;
  datePublished: string;
  hero: string;
  url: string;
  tags: Array<string>;
}

const BlogListItem = ({
  title,
  tags,
  url,
}: BlogManifest): React.ReactElement => {
  return (
    <S.OuterContainer>
      <S.Image />
      <S.ContentContainer>
        <div>
          {tags.map(tag => (
            <BlogTag tag={{ name: tag }} onPress={() => {}} />
          ))}
        </div>
        <div>
          <Text>{title}</Text>
          <Link to={url}>
            <Button title="link" onPress={() => {}} />
          </Link>
        </div>
      </S.ContentContainer>
    </S.OuterContainer>
  );
};

export default BlogListItem;
