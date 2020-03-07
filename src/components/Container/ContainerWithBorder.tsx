import React from "react";
import * as S from "./ContainerWithBorderStyles";

// If we pass an href, we want to try to route there using react-static's router
export const ContainerWithBorder = ({
  children,
  isFooter,
}: {
  children: React.ReactNode;
  isFooter: boolean;
}): React.ReactElement => {
  return (
    <S.OuterContainer isFooter={isFooter}>
      <S.InnerContainer>{children}</S.InnerContainer>
    </S.OuterContainer>
  );
};
