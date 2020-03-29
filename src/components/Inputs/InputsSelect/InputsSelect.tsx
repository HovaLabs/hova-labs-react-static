import React from "react";
import { ThemeContext } from "@hova-labs/bento-box-web";
import * as S from "./InputsSelectStyles";
import darkThemeArrow from "./darkThemeArrow.svg";
import lightThemeArrow from "./lightThemeArrow.svg";

export const InputsSelect: React.FC<{}> = () => {
  const { theme } = React.useContext(ThemeContext);
  const colors = [
    "Black",
    "White",
    "Brown",
    "Grey",
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple",
  ];
  const options = colors.map((option) => <option>{option}</option>);
  const arrow = theme.name === "darkTheme" ? darkThemeArrow : lightThemeArrow;
  return (
    <S.Select backgroundImage={arrow} id="color-select" name="os0">
      {options}
    </S.Select>
  );
};
