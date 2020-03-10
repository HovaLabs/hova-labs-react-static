import React from "react";
import { Text } from "@hova-labs/bento-box-web";
// import { useRouteData } from "react-static";
import BlogListItem from "../../../components/Blog/BlogListItem/BlogListItem";
import { BlogTag } from "../../../components/Blog/BlogTag/BlogTag";
import { NavigationFooter } from "../../../components/Navigation/NavigationFooter";
import * as S from "./blogStyles";
import { blogManifest } from "./blogManifest";
import { ContainerWithBorder } from "../../../components/Container/ContainerWithBorder";

export const Blog: React.FC<{}> = () => {
  const blogTags = blogManifest.reduce((acc, b) => {
    b.tags.forEach(tag => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  const BlogList = React.useMemo(
    () =>
      blogManifest
        .filter(
          post =>
            window.location.hash === "" ||
            post.tags.includes(window.location.hash.replace("#", ""))
        )
        .map(post => {
          return <BlogListItem key={post.datePublished} {...post} />;
        }),
    // This is frustrating. linter isn't catching use of window.location.hash
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [window.location.hash]
  );

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

export const NewOnTheBlog: React.FC<{}> = () => {
  // Grabbing only the two latest
  const BlogList = blogManifest.slice(0, 2).map(post => {
    return <BlogListItem key={post.datePublished} {...post} />;
  });

  return (
    <ContainerWithBorder>
      <S.NewOnTheBlogExtraPadding>
        <div>
          <Text typography="headingSmall">NEW ON THE BLOG</Text>
        </div>
        <br />
        <S.OuterContainer>{BlogList}</S.OuterContainer>
      </S.NewOnTheBlogExtraPadding>
    </ContainerWithBorder>
  );
};
