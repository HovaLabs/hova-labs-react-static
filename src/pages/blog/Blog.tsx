import React from "react";
import { useRouteData } from "react-static";
import BlogListItem from "../../components/Blog/BlogListItem/BlogListItem";
import { BlogTag } from "../../components/Blog/BlogTag/BlogTag";
import { blogTags } from "./BlogUtils";
import { Post } from "../../../types";

export const Blog = (): React.ReactElement => {
  const { posts }: { posts: Post[] } = useRouteData();

  const blogList = posts.map(post => <BlogListItem post={post} />);

  function onClick(): void {
    console.log("clicked");
  }
  const blogTagList = blogTags.map(tag => (
    <BlogTag tag={tag} onClick={onClick} />
  ));
  return (
    <div>
      {blogTagList}
      <h1>It's blog time.</h1>
      <br />
      All Posts:
      <ul>{blogList}</ul>
    </div>
  );
};
