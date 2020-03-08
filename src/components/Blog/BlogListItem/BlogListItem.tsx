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

const BlogListItem: React.FC<BlogManifest> = ({ hero, tags, title, url }) => {
  const tagsList = tags.map(tag => <BlogTag title={tag} onPress={() => {}} />);
  return (
    <S.OuterContainer>
      <S.Image backgroundImage={hero} />
      <S.ContentContainer>
        <div>
          <div>
            <Text typography="headingMedium">{title}</Text>
            <div>{tagsList}</div>
          </div>
          <Link to={url}>
            <S.Button title="Read" onPress={() => {}} />
          </Link>
        </div>
      </S.ContentContainer>
    </S.OuterContainer>
  );
};

export default BlogListItem;
