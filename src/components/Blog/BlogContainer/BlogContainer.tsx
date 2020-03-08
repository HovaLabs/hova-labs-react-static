import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import { NavigationFooter } from "components/Navigation/NavigationFooter";
import Matt from "./matt.png";
import Kaitlyn from "./kaitlyn.png";
import Cat from "./cat.png";
import { ContainerWithBorder } from "../../Container/ContainerWithBorder";
import { BlogTag } from "../BlogTag/BlogTag";

import * as S from "./BlogContainerStyles";

export const BlogContainer: React.FC<{
  blogManifest: {
    author: "Matt" | "Kaitlyn" | "Cat";
    datePublished: string;
    title: string;
    subtitle: string;
    tags: Array<string>;
  };
  children: React.ReactNode;
}> = ({ blogManifest, children }) => {
  const tagsList = blogManifest.tags.map(tag => (
    <BlogTag title={tag} onPress={() => {}} />
  ));

  return (
    <>
      <ContainerWithBorder>
        <Text typography="headingLarge">{blogManifest.title}</Text>
        <S.Subtitle>
          <Text typography="headingSmall">{blogManifest.subtitle}</Text>
        </S.Subtitle>
        {tagsList}
      </ContainerWithBorder>
      <ContainerWithBorder>
        <S.BlogStyles>{children}</S.BlogStyles>
      </ContainerWithBorder>
      <Author author={blogManifest.author} />
      <NavigationFooter />
    </>
  );
};

const authorPhotos = {
  Matt,
  Kaitlyn,
  Cat,
};

const authorBios = {
  Matt:
    "Matt is an Electrical Engineer, Full Stack Software Developer, and likes fun things. Cat is the best.",
  Kaitlyn:
    "Kaitlyn is a Neuroscientist, Violinist, Designer, and Software Engineer. Cat is the best.",
  Cat: "meow",
};

const authorLinks = {
  Matt: {
    text: "www.matthova.com",
    link: "http://www.matthova.com/",
  },
  Kaitlyn: {
    text: "www.kaitlynhova.com",
    link: "http://www.kaitlynhova.com/",
  },
  Cat: {
    text: "www.cathova.com",
    link:
      "http://adventures.kaitlynhova.com/posts/the-time-my-cat-went-viral-on-the-internet",
  },
};

const Author: React.FC<{ author: "Matt" | "Kaitlyn" | "Cat" }> = ({
  author,
}) => (
  <ContainerWithBorder>
    <S.AuthorContainer>
      <S.AuthorImageContainer>
        <S.AuthorImage src={authorPhotos[author]} alt="Author" />
      </S.AuthorImageContainer>
      <S.AuthorAboutContainer>
        <div>
          <Text typography="headingMedium">About the Author</Text>
        </div>
        <div>
          <Text>{authorBios[author]}</Text>
        </div>
        <div>
          <a href={authorLinks[author].link}>
            <Text color="primary" typography="bodyText">
              {authorLinks[author].text}
            </Text>
          </a>
        </div>
      </S.AuthorAboutContainer>
    </S.AuthorContainer>
  </ContainerWithBorder>
);
