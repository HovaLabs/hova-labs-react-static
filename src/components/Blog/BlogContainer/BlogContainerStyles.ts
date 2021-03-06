import styled from "styled-components";

export const BlogStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  > div {
    ${(p) =>
      p.theme.responsiveStyle("margin", {
        s: `${p.theme.spacings.l}px 0px`,
        l: `${p.theme.spacings.xl}px 0px`,
      })}
  }
  li {
    ${(p) =>
      p.theme.responsiveStyle("margin-bottom", {
        s: `${p.theme.spacings.m}px`,
        l: `${p.theme.spacings.l}px`,
      })}
  }
  iframe,
  img {
    align-self: center;
    margin: ${(p) => p.theme.spacings.l}px;
  }
  img {
    max-width: 100%;
    max-height: 70vh;
    flex-shrink: 0;
    height:auto;
    width:auto;
    display:block
  }
  code {
    ${(p) => p.theme.themedColor("background", "surface1")}
    margin: ${(p) => p.theme.spacings.l}px;
  }
`;

export const BlogRecipeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  li {
    ${(p) =>
      p.theme.responsiveStyle("margin-bottom", {
        s: `${p.theme.spacings.m}px`,
        l: `${p.theme.spacings.l}px`,
      })}
  }
  iframe,
  img {
    align-self: center;
    margin: 0 auto;
    ${(p) =>
      p.theme.responsiveStyle("margin-bottom", {
        s: `${p.theme.spacings.l}px`,
        l: `${p.theme.spacings.xl}px`,
      })}
    &:last-of-type{
      margin-bottom: 0;
    }
  }
  img {
    max-width: 100%;
    max-height: 70vh;
    flex-shrink: 0;
    height:auto;
    width:auto;
    display:block
  }
  code {
    ${(p) => p.theme.themedColor("background", "surface1")}
    margin: ${(p) => p.theme.spacings.l}px;
  }
`;

export const HeroImage = styled("div")<{ backgroundImage: string }>`
  ${(p) =>
    p.theme.responsiveStyle("height", {
      s: "150px",
      l: "120px",
    })}
  ${(p) => p.theme.themedColor("background-color", "surface1")}

  background-image: url(${(p) => p.backgroundImage});
  background-position: center;
  background-size: cover;
  width: 100%;
`;

export const AuthorImage = styled.img`
  ${(p) =>
    p.theme.responsiveStyle("align-self", {
      s: "center",
      l: "flex-end",
    })}
  position: relative;
  ${(p) =>
    p.theme.responsiveStyle("bottom", {
      l: "-48px",
      s: "0",
    })}
  max-width: 200px;
`;

export const AuthorImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  ${(p) =>
    p.theme.responsiveStyle("justify-content", {
      s: "flex-start",
      l: "center",
    })}
`;
export const Subtitle = styled.div`
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.m}px 0`,
      l: `${p.theme.spacings.l}px 0`,
    })}
`;

export const TagsContainer = styled.div`
  display: flex;
`;
