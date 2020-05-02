import styled from "styled-components";

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
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 330px;
  background-image: url(${(p) => p.backgroundImage});
`;

export const InfoContainer = styled.div`
  ${(p) => p.theme.themedColor("background", "surface2")}
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })};
`;

export const TitleContainer = styled.div``;

export const DescriptionContainer = styled.div`
  margin-bottom: ${(p) => p.theme.spacings.m}px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  > * {
    margin-right: ${(p) => p.theme.spacings.m}px;
  }
`;
