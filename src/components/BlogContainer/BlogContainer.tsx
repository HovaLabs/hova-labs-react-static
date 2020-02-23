import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import Matt from "./matt.png";
import Kaitlyn from "./kaitlyn.png";
import Cat from "./cat.png";

import * as S from "./BlogContainerStyles";

export const BlogContainer = ({
  author,
  children,
}: {
  author: "Matt" | "Kaitlyn" | "Cat";
  children: React.ReactNode;
}): React.ReactElement => (
  <div>
    <S.TopNavBump />
    <S.BlogStyles>{children}</S.BlogStyles>
    <Author author={author} />
  </div>
);

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

const Author = ({
  author,
}: {
  author: "Matt" | "Kaitlyn" | "Cat";
}): React.ReactElement => (
  <S.AuthorContainer>
    <S.AuthorImage src={authorPhotos[author]} alt="Author" />
    <S.AuthorAboutContainer>
      <div>
        <Text typography="headingMedium">About the author</Text>
      </div>
      <div>
        <Text>{authorBios[author]}</Text>
      </div>
      <div>
        <a href={authorLinks[author].link}>
          <Text>{authorLinks[author].text}</Text>
        </a>
      </div>
    </S.AuthorAboutContainer>
  </S.AuthorContainer>
);
