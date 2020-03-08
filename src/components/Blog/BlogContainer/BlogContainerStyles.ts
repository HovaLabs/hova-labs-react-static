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

export const AuthorImage = styled.img`
  height: 240px;
`;

export const AuthorContainer = styled.div`
  display: flex;
`;

export const AuthorAboutContainer = styled.div``;

export const Subtitle = styled.div`
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.m}px 0`,
      l: `${p.theme.spacings.l}px 0`,
    })}
`;
