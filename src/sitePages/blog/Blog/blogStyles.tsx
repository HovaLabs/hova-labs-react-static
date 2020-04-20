import styled from "styled-components";

export const BlogTagList = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const OuterContainer = styled("div")`
  h1 {
    ${(p) => p.theme.typography.headingLarge}
  }
  h2 {
    ${(p) => p.theme.typography.headingMedium}
  }
  h3 {
    ${(p) => p.theme.typography.headingSmall}
  }
  p {
    ${(p) => p.theme.typography.bodyText}
  }
  > div {
    ${(p) =>
        p.theme.responsiveStyle("margin-bottom", {
          s: `${p.theme.spacings.l}px`,
          l: `${p.theme.spacings.xl}px`,
        })}
      :last-child {
      margin-bottom: 0;
    }
  }
`;

export const NewOnTheBlogExtraPadding = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
`;

export const TagsContainer = styled.div`
  display: flex;
`;
