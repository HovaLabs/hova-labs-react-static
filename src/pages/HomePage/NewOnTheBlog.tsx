import React from "react";
import styled from "styled-components";
import { Text } from "@hova-labs/bento-box-web";
import { blogList } from "../blog/Blog/blogList";
import { Button } from "../../components";

// COPYRIGHT START
const NewOnTheBlogContainer = styled("div")`
${p =>
  p.theme.responsiveStyle("margin-top", {
    s: `${p.theme.spacings.l}px`,
    l: `${p.theme.spacings.xl}px`,
  })}
${p =>
  p.theme.responsiveStyle("padding", {
    s: `${p.theme.spacings.l}px`,
    l: `${p.theme.spacings.xxl}px`,
  })}
background-color: ${p => p.theme.colors.surface};
`;

// COPYRIGHT END

export const NewOnTheBlog = (): React.ReactElement => (
  <NewOnTheBlogContainer>
    <div>
      <Text typography="headingSmall">New on the blog</Text>
    </div>
    <div>
      {blogList.slice(0, 2).map(blog => (
        <div>
          <div>
            <div>{blog.title}</div>
            <div>{blog.datePublished}</div>
            <div>
              <Button title="Read More" href={blog.url} onPress={() => {}} />
            </div>
          </div>
          <img style={{ width: "50vw" }} src={blog.hero} alt={blog.title} />
        </div>
      ))}
    </div>
  </NewOnTheBlogContainer>
);
