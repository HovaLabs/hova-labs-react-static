import React from "react";
import { Spacer, Stack, Text } from "../../../components";
import {
  ContainerContent,
  ContainerWithBorder,
} from "../../../components/Container";
import { HovalinSelectionContext } from "./HovalinSelectionContext";
import * as S from "./ViolinTypeSelectorStyles";

export const ViolinTypeSelector: React.FC<{}> = () => {
  const {
    hovalinSizes,
    hovalinSize,
    setHovalinSize,
    hasSupports,
    setHasSupports,
    setIsMultiPieceChamber,
    isMultiPieceChamber,
  } = React.useContext(HovalinSelectionContext);

  return (
    <ContainerWithBorder>
      <ContainerContent flexXL="100">
        <Stack direction="vertical" space="16px">
          <>
            <div>Choose a violin size:</div>
            <Stack direction="horizontal" space="16px">
              {hovalinSizes.map((size) => (
                <S.SelectButton
                  key={size}
                  variant={hovalinSize === size ? "secondary" : "tertiary"}
                  title={size.replace("_", "/")}
                  onPress={() => setHovalinSize(size)}
                />
              ))}
            </Stack>
          </>
          <>
            <div>Include built-in supports?</div>
            <Stack direction="horizontal" space="16px">
              <S.SelectButton
                variant={hasSupports ? "secondary" : "tertiary"}
                title="With Supports"
                onPress={() => setHasSupports(true)}
              />
              <S.SelectButton
                variant={!hasSupports ? "secondary" : "tertiary"}
                title="Without Supports"
                onPress={() => setHasSupports(false)}
              />
            </Stack>
          </>
          <>
            <div>Single Piece or Multi-piece Chamber?</div>
            <Stack direction="horizontal" space="16px">
              <S.SelectButton
                variant={isMultiPieceChamber ? "tertiary" : "secondary"}
                title="Single Piece Chamber"
                onPress={() => setIsMultiPieceChamber(false)}
              />
              <S.SelectButton
                variant={!isMultiPieceChamber ? "tertiary" : "secondary"}
                title="Multi-piece Chamber"
                onPress={() => setIsMultiPieceChamber(true)}
              />
            </Stack>
          </>
        </Stack>
      </ContainerContent>
    </ContainerWithBorder>
  );
};
