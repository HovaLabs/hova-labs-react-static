import React from "react";
import * as S from "./TitlePrimaryStyles";

export const TitlePrimary: React.FC<{
  subtitle: string;
  title: string;
}> = ({ subtitle, title }) => (
  <>
    <S.Subtitle>{subtitle}</S.Subtitle>
    <S.Title>{title}</S.Title>
  </>
);
