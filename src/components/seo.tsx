/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import defaultImage from "../images/meta-image.jpg";

type SEOArgs = {
  description?: string;
  lang?: string;
  meta?: any;
  title?: string;
  image?: string;
};
export const SEO: React.FC<SEOArgs> = ({
  description,
  lang,
  meta,
  title,
  image,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            url
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata.title;
  const metaImage = image || defaultImage;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords,
        },
        {
          property: "og:title",
          content: metaTitle,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: metaImage,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:title",
          content: metaTitle,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        {
          name: "twitter:image:width",
          content: "1200",
        },
        {
          name: "twitter:image:height",
          content: "630",
        },
        {
          name: "twitter:image",
          content: metaImage,
        },
        {
          name: "title",
          property: "og:title",
          content: metaTitle,
        },
        {
          name: "description",
          property: "og:description",
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};
SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
};
