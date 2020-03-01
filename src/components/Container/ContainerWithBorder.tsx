import React from "react";
import * as S from "./ContainerWithBorderStyles";

// If we pass an href, we want to try to route there using react-static's router
export const ContainerWithBorder = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <S.OuterContainer>
      <S.InnerContainer>{children}</S.InnerContainer>
    </S.OuterContainer>
  );
};
