import React from "react";
import { Link } from "@reach/router";
import { Text } from "@hova-labs/bento-box-web";
import { BlogTag } from "../BlogTag/BlogTag";
import * as S from "./BlogListItemStyles";
import { dateToString } from "../../../utils/utilsDates";

export interface BlogManifest {
  title: string;
  datePublished: string;
  hero: string;
  url: string;
  tags: Array<string>;
}

const BlogListItem: React.FC<BlogManifest> = ({
  datePublished,
  hero,
  tags,
  title,
  url,
}) => {
  const tagsList = tags.map(tag => <BlogTag title={tag} onPress={() => {}} />);
  const formattedDate = dateToString(datePublished);
  return (
    <S.OuterContainer>
      <Link to={url} style={{ width: "100%" }}>
        <S.Image backgroundImage={hero} />
      </Link>
      <S.ContentContainer>
        <div>
          <div>
            <Text typography="headingMedium">{title}</Text>
            <S.Date>
              <Text typography="headingSmall">{formattedDate}</Text>
            </S.Date>
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
