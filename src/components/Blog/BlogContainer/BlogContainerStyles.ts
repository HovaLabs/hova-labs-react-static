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
    max-width: 100%;
    max-height: 75vh;
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
