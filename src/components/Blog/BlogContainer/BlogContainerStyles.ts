import styled from "styled-components";

export const BlogStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  iframe,
  img {
    align-self: center;
    margin: ${p => p.theme.spacings.l}px;
  }
  img {
    width: 100%;
  }
  code {
    background: ${p => p.theme.colors.surface1};
    margin: ${p => p.theme.spacings.l}px;
  }
`;

export const HeroImage = styled("div")<{ backgroundImage: string }>`
  ${p =>
    p.theme.responsiveStyle("height", {
      s: `150px`,
      l: `120px`,
    })}
  background-color: ${p => p.theme.colors.surface1};
  background-image: url(${p => p.backgroundImage});
  background-position: center;
  background-size: cover;
  width: 100%;
`;

export const AuthorImage = styled.img`
  height: 240px;
  ${p =>
    p.theme.responsiveStyle("margin-bottom", {
      s: `${p.theme.spacings.m}px`,
      l: `-${p.theme.spacings.xl}px`,
    })}
`;
export const AuthorImageContainer = styled.span`
  ${p =>
    p.theme.responsiveStyle("flex-basis", {
      s: "100%",
      m: "40%",
      l: "30%",
    })}
`;

export const AuthorContainer = styled.div`
  ${p =>
    p.theme.responsiveStyle("display", {
      s: "block",
      l: "flex",
    })}
`;

export const AuthorAboutContainer = styled.div`
  ${p =>
    p.theme.responsiveStyle("flex-basis", {
      s: "100%",
      m: "60%",
      l: "70%",
    })}
`;

export const Subtitle = styled.div`
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.m}px 0`,
      l: `${p.theme.spacings.l}px 0`,
    })}
`;
