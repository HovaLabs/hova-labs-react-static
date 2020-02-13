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
  const tagsList = tags.map(tag => <BlogTag title={tag} onPress={() => {}} />);
  return (
    <S.OuterContainer>
      <S.Image />
      <S.ContentContainer>
        <div>{tagsList}</div>
        <div>
          <Text typography="headingMedium">{title}</Text>
          <S.Description>
            <Text>{title}</Text>
          </S.Description>
          <S.Button>
            <Link to={url}>
              <Button title="Read" onPress={() => {}} />
            </Link>
          </S.Button>
        </div>
      </S.ContentContainer>
    </S.OuterContainer>
  );
};

export default BlogListItem;
