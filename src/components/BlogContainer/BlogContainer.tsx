import React from "react";
import * as S from "./BlogContainerStyles";

export const BlogContainer = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => <S.Container>{children}</S.Container>;
