import React from "react";
import { Text } from "@hova-labs/bento-box-web";
// import { useRouteData } from "react-static";
import BlogListItem from "../../../components/Blog/BlogListItem/BlogListItem";
import { BlogTag } from "../../../components/Blog/BlogTag/BlogTag";
import * as S from "./blogStyles";
import { blogManifest } from "./blogManifest";
import { ContainerWithBorder } from "../../../components/Container";
import Layout from "../../../components/layout";

const getBlogList = (): {
  hero: any;
  datePublished: string;
  tags: string[];
  title: string;
  subtitle: string;
  url: string;
}[] => {
  const filteredManifestArray = blogManifest.filter((post) => {
    return (
      typeof window === "undefined" ||
      window.location.hash === "" ||
      window.location.hash === "#all" ||
      post.tags.includes(window.location.hash.replace("#", ""))
    );
  });
  return filteredManifestArray;
};
export const Blog: React.FC<{}> = () => {
  const blogTags = blogManifest.reduce(
    (acc, b) => {
      b.tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
      return acc;
    },
    ["all"],
  );

  const blogList = getBlogList();

  const blogTagList = blogTags.map((tag) => (
    <BlogTag key={tag} title={tag} onPress={() => {}} />
  ));

  return (
    <Layout>
      <ContainerWithBorder>
        <Text typography="headingLarge">Blog</Text>
        <S.BlogTagList>{blogTagList}</S.BlogTagList>
        <br />
        {blogList.map((post) => (
          <BlogListItem key={post.datePublished} {...post} />
        ))}
      </ContainerWithBorder>
    </Layout>
  );
};

export const NewOnTheBlog: React.FC<{}> = () => {
  // Grabbing only the two latest
  const BlogList = blogManifest.slice(0, 2).map((post) => {
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
