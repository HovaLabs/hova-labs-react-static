import React from "react";
import styled from "styled-components";
import { Text } from "@hova-labs/bento-box-web";
import { blogManifest } from "../blog/Blog/blogManifest";
import { Button } from "../../components";
import { TitlePrimary } from "../../components/Title/TitlePrimary/TitlePrimary";
import { dateToString } from "../../utils/utilsDates";

import {
  ContainerWithBorder,
  ContainerFlex,
  ContainerContent,
} from "../../components/Container";

const BlogPost = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.m}px 0`,
      l: `${p.theme.spacings.l}px 0`,
    })}
`;

const Date = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.m}px 0`,
      l: `${p.theme.spacings.l}px 0`,
    })}
`;

const Image = styled("div")<{ backgroundImage: string }>`
  ${(p) =>
    p.theme.responsiveStyle("height", {
      s: "150px",
      l: "326px",
    })}
  ${(p) =>
    p.theme.responsiveStyle("flex", {
      s: "0 0 100%",
      l: "0 1 60%",
    })}
  background-color: ${(p) => p.theme.colors.surface1};
  background-image: url(${(p) => p.backgroundImage});
  background-position: center;
  background-size: cover;
  margin-bottom: ${(p) => `${p.theme.spacings.l}px`};
`;

export const NewOnTheBlog: React.FC<{}> = () => (
  <ContainerWithBorder>
    <ContainerFlex>
      <ContainerContent flexL="100">
        <div>
          <TitlePrimary subtitle="New on the Blog" title="Our Writings" />
        </div>
      </ContainerContent>
    </ContainerFlex>
    <br />
    {blogManifest.slice(0, 2).map((blog) => (
      <BlogPost>
        <ContainerFlex>
          <ContainerContent flexL="50">
            <Image backgroundImage={blog.hero} />
          </ContainerContent>
          <ContainerContent flexL="50">
            <Text typography="headingMedium">{blog.title}</Text>
            <Date>{dateToString(blog.datePublished)}</Date>
            <div>
              <Button title="Read More" href={blog.url} onPress={() => {}} />
            </div>
          </ContainerContent>
          <br />
        </ContainerFlex>
      </BlogPost>
    ))}
  </ContainerWithBorder>
);
