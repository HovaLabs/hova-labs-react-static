import React from "react";
import { Link } from "gatsby";
import { Text, SEO } from "../..";

import Matt from "./matt.png";
import Kaitlyn from "./kaitlyn.png";
import Cat from "./cat.png";
import {
  ContainerFlex,
  ContainerContent,
  ContainerWithBorder,
} from "../../Container";
import { BlogTag } from "../BlogTag/BlogTag";
import * as S from "./BlogContainerStyles";
import Layout from "../../layout";
import { routes } from "../../../routes";
import { dateToString } from "../../../utils/utilsDates";

export const BlogContainer: React.FC<{
  blogManifest: {
    hero: string;
    author: "Matt" | "Kaitlyn" | "Cat";
    datePublished: string;
    title: string;
    subtitle: string;
    tags: Array<string>;
  };
  children: React.ReactNode;
  variant: "recipe" | "general";
}> = ({ blogManifest, children, variant = "general" }) => {
  const tagsList = blogManifest.tags.map((tag) => (
    <BlogTag title={tag} onPress={() => {}} />
  ));
  const content =
    variant === "recipe" ? (
      <S.BlogRecipeStyles>{children}</S.BlogRecipeStyles>
    ) : (
      <ContainerWithBorder>
        <ContainerFlex>
          <ContainerContent flexXL="100">
            <S.BlogStyles>{children}</S.BlogStyles>
          </ContainerContent>
        </ContainerFlex>
      </ContainerWithBorder>
    );
  const formattedDate = dateToString(blogManifest.datePublished);
  const servingsArea =
    variant === "recipe" ? (
      <div>
        <br />
        <Text typography="bodyText">Serves: 4</Text>
      </div>
    ) : (
      <></>
    );
  return (
    <Layout>
      <SEO
        title={blogManifest.title}
        description={blogManifest.subtitle}
        image={blogManifest.hero}
      />
      <ContainerWithBorder
        backgroundImage={blogManifest.hero}
        backgroundImageStyles={{ opacity: 0.2 }}
      >
        <ContainerFlex>
          <ContainerContent flexXL="100">
            <div>
              <Link to={routes.BLOG}>
                <Text color="primary" typography="bodyText">
                  ← back to blog
                </Text>
              </Link>
            </div>

            <Text typography="headingLarge">{blogManifest.title}</Text>
            <S.Subtitle>
              <Text typography="headingSmall">{`${formattedDate} | ${blogManifest.subtitle}`}</Text>
              {servingsArea}
            </S.Subtitle>
            <S.TagsContainer>{tagsList}</S.TagsContainer>
          </ContainerContent>
        </ContainerFlex>
      </ContainerWithBorder>
      {content}
      <Author author={blogManifest.author} />
    </Layout>
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
    text: "Check out more projects at github.com/matthova",
    link: "https://github.com/matthova",
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
    <ContainerFlex>
      <ContainerContent disablePadding flexM="40" flexL="50" flexXL="40">
        <S.AuthorImageContainer>
          <S.AuthorImage src={authorPhotos[author]} alt="Author" />
        </S.AuthorImageContainer>
      </ContainerContent>

      <ContainerContent disablePadding flexM="60" flexL="50" flexXL="60">
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
      </ContainerContent>
    </ContainerFlex>
  </ContainerWithBorder>
);
