import styled from "styled-components";

export const Container = styled.div`
  margin-top: ${p => p.theme.spacings.xl}px;
  display: grid;
  ${p =>
    p.theme.responsiveStyle("grid-template-columns", {
      s: "1fr",
      l: "2fr 1fr",
    })}
  grid-column-gap: ${p => p.theme.spacings.xl}px;
  ${p =>
    p.theme.responsiveStyle("grid-row-gap", {
      s: `${p.theme.spacings.xl}px`,
      l: `${p.theme.spacings.xxl}px`,
    })}
`;

// Have to set position: relative in order for child position absolute to center image
export const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 330px;
  overflow: hidden;
`;

// Solution for horizontally centered images with overflow
// https://stackoverflow.com/questions/20141865/responsive-vertical-center-with-overflow-hidden
export const HeroImage = styled("div")<{ backgroundImage: string }>`
  float: left;
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 330px;
  background-image: url(${p => p.backgroundImage});
`;

export const TitleContainer = styled.div``;

export const DescriptionContainer = styled.div`
  margin-bottom: ${p => p.theme.spacings.m}px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  > * {
    margin-right: ${p => p.theme.spacings.m}px;
  }
`;
