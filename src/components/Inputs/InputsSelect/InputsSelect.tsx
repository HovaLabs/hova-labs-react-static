import React from "react";
import { ThemeContext } from "@hova-labs/bento-box-web";
import * as S from "./InputsSelectStyles";
import darkThemeArrow from "../../../media/Icons/darkThemeArrow.svg";
import lightThemeArrow from "../../../media/Icons/lightThemeArrow.svg";

export const InputsSelect: React.FC<{
  onChange: () => void;
}> = ({ onChange }) => {
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
  const options = colors.map(option => <option>{option}</option>);
  const arrow = theme.name === "darkTheme" ? darkThemeArrow : lightThemeArrow;
  return (
    <>
      <S.Select
        backgroundImage={arrow}
        id="colorSelect"
        onChange={onChange}
        onKeyPress={onChange}
      >
        {options}
      </S.Select>
    </>
  );
};
