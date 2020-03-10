import React, { useState } from "react";
import { Text } from "@hova-labs/bento-box-web";
import * as S from "./InputsSelectColorStyles";

export const InputsSelectColor: React.FC<{
  onChange: () => void;
}> = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
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
  const colorText = selectedColor || "Select Color";
  const options = showOptions
    ? colors.map(option => (
        <S.ColorOptionButton
        type="button"
        onClick={() => {
            setSelectedColor(option);
            setShowOptions(false);
          }}
        onKeyPress={() => {
            setSelectedColor(option);
            setShowOptions(false);
          }}
      >
        <S.ColorOptionCircle color={option} />
        <Text typography="bodyText">{option}</Text>
      </S.ColorOptionButton>
      ))
    : null;
  return (
    <S.OuterContainer>
      <S.ColorOptionButton
        type="button"
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        onKeyPress={onChange}
      >
        <Text typography="bodyText">{colorText}</Text>
      </S.ColorOptionButton>
      <S.ButtonContainer>{options}</S.ButtonContainer>
    </S.OuterContainer>
  );
};
