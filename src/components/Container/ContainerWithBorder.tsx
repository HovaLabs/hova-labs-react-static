import React from "react";
import * as S from "./ContainerWithBorderStyles";

type LineArgs = {
  percents: string[];
};

const Lines: React.FC<LineArgs> = ({ percents }) => {
  const lines = percents.map((percent) => {
    return <S.Line width={percent} />;
  });
  return <S.LineArea>{lines}</S.LineArea>;
};

export const ContainerWithBorder: React.FC<{
  backgroundImage?: any;
  backgroundImageStyles?: any;
  children: React.ReactNode;
  lineVariant?: any;
}> = ({ backgroundImage, backgroundImageStyles, children, lineVariant }) => {
  let lines;
  if (lineVariant) {
    switch (lineVariant) {
      case "hero":
        lines = (
          <Lines percents={["100%", "80%", "60%", "100%", "80%", "60%"]} />
        );
        break;
      case "backward":
        lines = <Lines percents={["60%", "80%", "100%"]} />;
        break;
      case "forward":
        lines = <Lines percents={["100%", "80%", "60%"]} />;
        break;
      default:
        lines = null;
    }
  }
  return (
    <S.OuterContainer>
      {backgroundImage ? (
        <S.BackgroundImage
          backgroundImage={backgroundImage}
          backgroundImageStyles={backgroundImageStyles}
        />
      ) : null}
      {lines}
      <S.InnerContainer hasBackgroundImage={!!backgroundImage}>
        <S.ContentContainer>{children}</S.ContentContainer>
      </S.InnerContainer>
    </S.OuterContainer>
  );
};
