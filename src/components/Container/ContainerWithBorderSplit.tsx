import React from "react";
import * as S from "./ContainerWithBorderStyles";

export const ContainerWithBorderSplit: React.FC<{
  backgroundImage?: any;
  backgroundImageStyles?: any;
  children: React.ReactNode;
}> = ({ backgroundImage, backgroundImageStyles, children }) => {
  return (
    <S.OuterContainerSplit>
      {backgroundImage ? (
        <S.BackgroundImage
          backgroundImage={backgroundImage}
          backgroundImageStyles={backgroundImageStyles}
        />
      ) : null}
      <S.InnerContainer hasBackgroundImage={!!backgroundImage}>
        <S.ContentContainer>{children}</S.ContentContainer>
      </S.InnerContainer>
    </S.OuterContainerSplit>
  );
};
