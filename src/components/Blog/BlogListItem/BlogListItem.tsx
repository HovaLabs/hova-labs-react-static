import React from "react";
import { Link } from "@reach/router";
import { Text } from "@hova-labs/bento-box-web";
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
  hero,
  tags,
  title,
  url,
}: BlogManifest): React.ReactElement => {
  const tagsList = tags.map(tag => (
    <BlogTag title={tag} disabled onPress={() => {}} />
  ));
  return (
    <S.OuterContainer>
      <S.Image src={hero} />
      <S.ContentContainer>
        <div>
          <div>
            <Text typography="headingMedium">{title}</Text>
          </div>
          <Link to={url}>
            <S.Button title="Read" onPress={() => {}} />
          </Link>
        </div>
        <div>{tagsList}</div>
      </S.ContentContainer>
    </S.OuterContainer>
  );
};

export default BlogListItem;
