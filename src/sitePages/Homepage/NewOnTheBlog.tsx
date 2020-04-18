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
    p.theme.responsiveStyle("padding-bottom", {
      s: `${p.theme.spacings.m}px`,
      l: `${p.theme.spacings.l}px`,
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
      xl: "326px",
    })}
  width: 100%;
  background-image: url(${(p) => p.backgroundImage});
  background-position: center;
  background-size: cover;
  margin-bottom: ${(p) => `${p.theme.spacings.l}px`};
`;

const OuterContainer = styled("div")`
  background: ${(p) => p.theme.colors.surface2};
  ${(p) =>
    p.theme.responsiveStyle("margin-top", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px ${p.theme.spacings.l}px 0`,
      l: `${p.theme.spacings.xl}px 0 0 0`,
    })}
`;

export const NewOnTheBlog: React.FC<{}> = () => (
  <ContainerWithBorder>
    <ContainerFlex>
      <ContainerContent flexXL="100">
        <div>
          <TitlePrimary subtitle="New on the Blog" title="Our Writings" />
        </div>
      </ContainerContent>
    </ContainerFlex>
    {blogManifest.slice(0, 2).map((blog) => (
      <OuterContainer>
        <BlogPost>
          <ContainerFlex>
            <ContainerContent flexXL="40">
              <Image backgroundImage={blog.hero} />
            </ContainerContent>
            <ContainerContent flexXL="60">
              <Text typography="headingMedium">{blog.title}</Text>
              <Date>{dateToString(blog.datePublished)}</Date>
              <div>
                <Button title="Read More" href={blog.url} onPress={() => {}} />
              </div>
            </ContainerContent>
          </ContainerFlex>
        </BlogPost>
      </OuterContainer>
    ))}
  </ContainerWithBorder>
);
