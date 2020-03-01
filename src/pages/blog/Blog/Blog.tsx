import React from "react";
// import { useRouteData } from "react-static";
import BlogListItem from "../../../components/Blog/BlogListItem/BlogListItem";
import { BlogTag } from "../../../components/Blog/BlogTag/BlogTag";
import * as S from "./BlogStyles";
import { blogList } from "./blogList";
import { ContainerWithBorder } from "../../../components/Container/ContainerWithBorder";

export const Blog = (): React.ReactElement => {
  const blogTags: Array<any> = [];
  const BlogList = blogList.map(post => {
    // HACK - it's a map but were also using it to populate the list of unique tags
    post.tags.forEach(tag => {
      if (!blogTags.includes(tag)) {
        blogTags.push(tag);
      }
    });

    return <BlogListItem key={post.datePublished} {...post} />;
  });
  function onPress(): void {
    console.log("clicked");
  }

  const blogTagList = blogTags.map(tag => (
    <BlogTag key={tag} title={tag} onPress={onPress} />
  ));

  return (
    <ContainerWithBorder>
      <S.OuterContainer>
        {blogTagList}
        {BlogList}
      </S.OuterContainer>
    </ContainerWithBorder>
  );
};
