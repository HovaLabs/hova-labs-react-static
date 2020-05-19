import styled from "styled-components";

export const BlogTagList = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const Code = styled("div")`
  background-color: ${(p) => p.theme.colors.surface2};
  font-family: monospace;
  white-space: break-spaces;
  width: 100%;
  > p {
    padding: ${(p) => `0 ${p.theme.spacings.xl}px`};
  }
`;

export const Highlight = styled("span")`
  background-color: ${(p) => p.theme.colors.highlight};
  color: ${(p) => p.theme.colors.onSurface1};
  margin: ${(p) => `0px ${p.theme.spacings.s}px`};
  padding: ${(p) => `0px ${p.theme.spacings.s}px`};
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

export const ContainerFlexOnly = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("display", {
      s: "block",
      l: "flex",
    })}
`;

export const NewOnTheBlogExtraPadding = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
`;

export const Quote = styled("span")`
  border-left: ${(p) => `3px solid ${p.theme.colors.onSurface1}`};
  padding-left: ${(p) => `${p.theme.spacings.xl}px`};
`;

export const TagsContainer = styled.div`
  display: flex;
`;
