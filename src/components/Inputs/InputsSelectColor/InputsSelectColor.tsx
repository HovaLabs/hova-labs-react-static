import React from "react";
import * as S from "./InputsSelectColorStyles";

export const InputsSelectColor: React.FC<{
  onChange: () => void;
}> = ({ onChange }) => {
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
  return (
    <>
      <label>Select a Color</label>
      <S.Select id="colorSelect" onChange={onChange} onKeyPress={onChange}>
        {options}
      </S.Select>
    </>
  );
};
