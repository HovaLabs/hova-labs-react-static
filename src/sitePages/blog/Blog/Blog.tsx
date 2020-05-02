import React from "react";
import { Text } from "../../../components";
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
        {blogList.map((post) => (
          <BlogListItem key={post.datePublished} {...post} />
        ))}
      </ContainerWithBorder>
    </Layout>
  );
};
