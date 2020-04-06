import styled from "styled-components";

export const BlogStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  iframe,
  img {
    align-self: center;
    margin: ${(p) => p.theme.spacings.l}px;
  }
  img {
    max-width: 100%;
    max-height: 70vh;
  }
  code {
    background: ${(p) => p.theme.colors.surface1};
    margin: ${(p) => p.theme.spacings.l}px;
  }
`;

export const HeroImage = styled("div")<{ backgroundImage: string }>`
  ${(p) =>
    p.theme.responsiveStyle("height", {
      s: "150px",
      l: "120px",
    })}
  background-color: ${(p) => p.theme.colors.surface1};
  background-image: url(${(p) => p.backgroundImage});
  background-position: center;
  background-size: cover;
  width: 100%;
`;

export const AuthorImage = styled.img`
  ${(p) =>
    p.theme.responsiveStyle("align-self", {
      s: "flex-start",
      l: "center",
    })}
  max-width: 200px;
`;

export const AuthorImageContainer = styled.div`
  display: flex;
  align-items: center;
  ${(p) =>
    p.theme.responsiveStyle("justify-content", {
      m: "flex-start",
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
