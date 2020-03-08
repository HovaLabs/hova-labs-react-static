import React from "react";
import styled, { css } from "styled-components";
import { Text } from "@hova-labs/bento-box-web";
import { blogManifest } from "../blog/Blog/blogManifest";
import { Button } from "../../components";
import { dateToString } from "../../utils/utilsDates";

// COPYRIGHT START
const NewOnTheBlogContainer = styled("div")`
${p =>
  p.theme.responsiveStyle("margin", {
    s: `${p.theme.spacings.m}px ${p.theme.spacings.l}px`,
    l: `${p.theme.spacings.l}px ${p.theme.spacings.xl}px`,
  })}
${p =>
  p.theme.responsiveStyle("padding", {
    s: `${p.theme.spacings.l}px`,
    l: `${p.theme.spacings.xxl}px`,
  })}
background-color: ${p => p.theme.colors.surface1};
`;

const Image = styled("div")<{ backgroundImage: string }>`
  ${p =>
    p.theme.responsiveStyle("height", {
      s: `150px`,
      l: `326px`,
    })}
  ${p =>
    p.theme.responsiveStyle("flex", {
      s: "0 0 100%",
      l: "0 1 60%",
    })}
  background-color: ${p => p.theme.colors.surface1};
  background-image: url(${p => p.backgroundImage});
  background-position: center;
  background-size: cover;
`;

const BlogContainer = styled("div")`
  padding-top: ${p => p.theme.spacings.xl}px;
  display: grid;
  ${p =>
    p.theme.responsiveStyle("grid-template-columns", {
      s: "1fr",
      l: "1fr 2fr",
    })}
  ${p =>
    p.theme.responsiveStyle("grid-gap", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xxl}px`,
    })}
  ${p =>
    p.theme.responsiveValue({
      s: css`
        > div {
          :nth-child(2n -1) {
            margin-top: 48px;
          }
        }
      `,
      l: "",
    })}
`;

const LeftColumn = styled("div")`
  flex: 1;
  > div {
    padding-bottom: ${p => p.theme.spacings.l}px;
  }
`;

const BlogTitle = styled("div")`
  ${p => p.theme.typography.headingMedium}
`;

const RightColumn = styled("div")`
  flex: 2;
`;

export const NewOnTheBlog: React.FC<{}> = () => (
  <NewOnTheBlogContainer>
    <div>
      <Text typography="headingSmall">NEW ON THE BLOG</Text>
    </div>
    <BlogContainer>
      {blogManifest.slice(0, 2).map(blog => (
        <>
          <LeftColumn>
            <BlogTitle>{blog.title}</BlogTitle>
            <div>{dateToString(blog.datePublished)}</div>
            <div>
              <Button title="Read More" href={blog.url} onPress={() => {}} />
            </div>
          </LeftColumn>
          <RightColumn>
            <Image backgroundImage={blog.hero} />
          </RightColumn>
        </>
      ))}
    </BlogContainer>
  </NewOnTheBlogContainer>
);
