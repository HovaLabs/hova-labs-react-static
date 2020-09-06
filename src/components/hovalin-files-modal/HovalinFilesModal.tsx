import React from "react";
import { isMobile } from "react-device-detect";

import * as S from "./HovalinFilesModalStyles";
import { ClickOutside } from "../ClickOutside";
import { Button } from "../Button";
import { HovalinSelectionContext } from "../../sitePages/hovalin/docs/HovalinSelectionContext";

export const HovalinFilesModal: React.FC = () => {
  const {
    hovalinSizes,
    hovalinSize,
    setHovalinSize,
    hasSupports,
    setHasSupports,
    setIsMultiPieceChamber,
    isMultiPieceChamber,
    downloadUrl,
    isDownloadModalOpen,
    setIsDownloadModalOpen,
  } = React.useContext(HovalinSelectionContext);

  if (!isDownloadModalOpen) {
    return null;
  }

  return (
    <S.Modal>
      <ClickOutside onClickOutside={() => setIsDownloadModalOpen(false)}>
        <S.ModalContent>
          <S.CloseButton onClick={() => setIsDownloadModalOpen(false)}>
            x
          </S.CloseButton>
          {isMobile ? (
            <div>
              <div>
                We do not allow downloading the stl files from a mobile device
              </div>
              <S.Spacer />
              <Button
                variant="primary"
                title="dang"
                onPress={() => setIsDownloadModalOpen(false)}
              />
            </div>
          ) : (
            <>
              <div>Choose a violin size:</div>
              <S.ButtonContainer>
                {hovalinSizes.map((size) => (
                  <S.SelectButton
                    key={size}
                    variant={hovalinSize === size ? "secondary" : "tertiary"}
                    title={size.replace("_", "/")}
                    onPress={() => setHovalinSize(size)}
                  />
                ))}
              </S.ButtonContainer>
              <S.Spacer />
              <div>Include built-in supports?</div>
              <S.ButtonContainer>
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
              </S.ButtonContainer>
              <S.Spacer />
              <div>Single Piece or Multi-piece Chamber?</div>
              <S.ButtonContainer>
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
