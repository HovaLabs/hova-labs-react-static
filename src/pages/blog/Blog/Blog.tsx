import React from "react";
// import { useRouteData } from "react-static";
import { Text } from "@hova-labs/bento-box-web";
import BlogListItem from "../../../components/Blog/BlogListItem/BlogListItem";
import { BlogTag } from "../../../components/Blog/BlogTag/BlogTag";
import { NavigationFooter } from "../../../components/Navigation/NavigationFooter";
import * as S from "./blogStyles";
import { blogManifest } from "./blogManifest";
import { ContainerWithBorder } from "../../../components/Container/ContainerWithBorder";

export const Blog: React.FC<{}> = () => {
  const blogTags: Array<any> = [];
  const BlogList = blogManifest.map(post => {
    // HACK - it's a map but were also using it to populate the list of unique tags
    post.tags.forEach(tag => {
      if (!blogTags.includes(tag)) {
        blogTags.push(tag);
      }
    });

    return <BlogListItem key={post.datePublished} {...post} />;
  });

  const blogTagList = blogTags.map(tag => (
    <BlogTag key={tag} title={tag} onPress={() => {}} />
  ));

  return (
    <>
      <ContainerWithBorder>
        <S.OuterContainer>
          <Text typography="headingLarge">Blog</Text>
          <div>{blogTagList}</div>
          {BlogList}
        </S.OuterContainer>
      </ContainerWithBorder>
      <NavigationFooter />
    </>
  );
};
