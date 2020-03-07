import React from "react";
import * as S from "./ContainerWithBorderStyles";

export const ContainerWithBorder: React.FC<{
  backgroundImage?: any;
  backgroundImageStyles?: any;
  children: React.ReactNode;
}> = ({ backgroundImage, backgroundImageStyles, children }) => (
  <S.OuterContainer>
    {backgroundImage ? (
      <S.BackgroundImage
        backgroundImage={backgroundImage}
        backgroundImageStyles={backgroundImageStyles}
      />
    ) : null}
    <S.InnerContainer hasBackgroundImage={!!backgroundImage}>
      {children}
    </S.InnerContainer>
  </S.OuterContainer>
);
