import React from "react";
import { isMobile } from "react-device-detect";

import * as S from "./HovalinFilesModalStyles";
import { ClickOutside } from "../ClickOutside";
import { Button } from "../Button";

const hovalinSizes = ["4_4"];
type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never;
type HovalinSizes = ElementType<typeof hovalinSizes>;

export const HovalinFilesModal: React.FC<{
  isModalOpen: boolean;
  setIsModalOpen: (newVal: boolean) => void;
}> = ({ isModalOpen, setIsModalOpen }) => {
  const [size, setSize] = React.useState<HovalinSizes>("4_4");
  const [withSupports, setWithSupports] = React.useState<boolean>(true);
  const [singlePieceChamber, setSinglePieceChamber] = React.useState<boolean>(
    true,
  );
  const downloadUrl = `https://hovalin.s3-us-west-2.amazonaws.com/v5.0.0/hovalin_v5_0_0_${size}_${
    withSupports ? "with_supports" : "without_supports"
  }_${
    singlePieceChamber ? "single_piece_chamber" : "split_pieces_chamber"
  }.zip`;

  if (!isModalOpen) {
    return null;
  }

  return (
    <S.Modal>
      <ClickOutside onClickOutside={() => setIsModalOpen(false)}>
        <S.ModalContent>
          <S.CloseButton onClick={() => setIsModalOpen(false)}>x</S.CloseButton>
          {isMobile ? (
            <div>
              <div>
                We do not allow downloading the stl files from a mobile device
              </div>
              <S.Spacer />
              <Button
                variant="primary"
                title="dang"
                onPress={() => setIsModalOpen(false)}
              />
            </div>
          ) : (
            <>
              <div>Choose a violin size:</div>
              <S.ButtonContainer>
                {hovalinSizes.map((hovalinSize) => (
                  <S.SelectButton
                    key={hovalinSize}
                    variant={size === hovalinSize ? "secondary" : "tertiary"}
                    title={hovalinSize.replace("_", "/")}
                    onPress={() => setSize(hovalinSize)}
                  />
                ))}
              </S.ButtonContainer>
              <S.Spacer />
              <div>Include built-in supports?</div>
              <S.ButtonContainer>
                <S.SelectButton
                  variant={withSupports ? "secondary" : "tertiary"}
                  title="With Supports"
                  onPress={() => setWithSupports(true)}
                />
                <S.SelectButton
                  variant={!withSupports ? "secondary" : "tertiary"}
                  title="Without Supports"
                  onPress={() => setWithSupports(false)}
                />
              </S.ButtonContainer>
              <S.Spacer />
              <div>Single Piece or Multi-piece Chamber?</div>
              <S.ButtonContainer>
                <S.SelectButton
                  variant={singlePieceChamber ? "secondary" : "tertiary"}
                  title="Single Piece Chamber"
                  onPress={() => setSinglePieceChamber(true)}
                />
                <S.SelectButton
                  variant={!singlePieceChamber ? "secondary" : "tertiary"}
                  title="Multi-piece Chamber"
                  onPress={() => setSinglePieceChamber(false)}
                />
              </S.ButtonContainer>
              <S.Spacer />
              <S.Spacer />
              <Button variant="primary" href={downloadUrl} title="DOWNLOAD" />
            </>
          )}
        </S.ModalContent>
      </ClickOutside>
    </S.Modal>
  );
};
