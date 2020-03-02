import React from "react";
import styled, { css } from "styled-components";
import { Text } from "@hova-labs/bento-box-web";
import { blogList } from "../blog/Blog/blogList";
import { Button } from "../../components";

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
background-color: ${p => p.theme.colors.surface};
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
      l: "0 0 646px",
    })}
  background-color: ${p => p.theme.colors.surface};
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

const months: { [key: string]: string } = {
  "0": "January",
  "1": "February",
  "2": "March",
  "3": "April",
  "4": "May",
  "5": "June",
  "6": "July",
  "7": "August",
  "8": "September",
  "9": "October",
  "10": "November",
  "11": "December",
};

const dateToString = (isoString: string): string => {
  const date = new Date(isoString);
  const monthInt = date.getMonth().toString();
  const month = months[monthInt];

  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
};

export const NewOnTheBlog = (): React.ReactElement => (
  <NewOnTheBlogContainer>
    <div>
      <Text typography="headingSmall">New on the blog</Text>
    </div>
    <BlogContainer>
      {blogList.slice(0, 2).map(blog => (
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
