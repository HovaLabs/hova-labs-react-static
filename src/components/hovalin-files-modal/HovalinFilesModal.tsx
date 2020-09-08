import React from "react";
import { isMobile } from "react-device-detect";

import * as S from "./HovalinFilesModalStyles";
import { ClickOutside } from "../ClickOutside";
import { Button } from "../Button";
import { Spacer } from "../Spacer";
import { HovalinSelectionContext } from "../../sitePages/hovalin/docs/HovalinSelectionContext";
import { ViolinTypeSelector } from "../../sitePages/hovalin/docs/ViolinTypeSelector";

export const HovalinFilesModal: React.FC = () => {
  const {
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
              <ViolinTypeSelector />
              <Spacer height="32px" />
              <Button variant="primary" href={downloadUrl} title="DOWNLOAD" />
            </>
          )}
        </S.ModalContent>
      </ClickOutside>
    </S.Modal>
  );
};
