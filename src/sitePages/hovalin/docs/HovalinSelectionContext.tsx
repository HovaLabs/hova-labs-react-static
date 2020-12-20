import React from "react";

export const hovalinSizes = ["4_4", "3_4"];
type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never;
export type HovalinSize = ElementType<typeof hovalinSizes>;

export const HovalinSelectionContext = React.createContext<{
  isMultiPieceChamber: boolean;
  setIsMultiPieceChamber: (newVal: boolean) => void;
  hovalinSizes: HovalinSize[];
  hovalinSize: HovalinSize;
  setHovalinSize: (newSize: HovalinSize) => void;
  hasSupports: boolean;
  setHasSupports: (newVal: boolean) => void;
  downloadUrl: string;
  isDownloadModalOpen: boolean;
  setIsDownloadModalOpen: (newVal: boolean) => void;
}>({
  isMultiPieceChamber: false,
  setIsMultiPieceChamber: () => {},
  hovalinSizes,
  hovalinSize: "4_4",
  setHovalinSize: () => {},
  hasSupports: true,
  setHasSupports: () => {},
  downloadUrl: "",
  isDownloadModalOpen: false,
  setIsDownloadModalOpen: () => {},
});

export const HovalinSelectionContextProvider: React.FC = ({ children }) => {
  const [isMultiPieceChamber, setIsMultiPieceChamber] = React.useState<boolean>(
    false,
  );
  const [hovalinSize, setHovalinSize] = React.useState<HovalinSize>("4_4");
  const [hasSupports, setHasSupports] = React.useState<boolean>(true);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = React.useState<boolean>(
    false,
  );

  const downloadUrlArray = [
    "https://hovalin.s3-us-west-2.amazonaws.com/v5.1.0/hovalin_v5_1_0",
  ];
  downloadUrlArray.push(hovalinSize);
  downloadUrlArray.push(hasSupports ? "with_supports" : "without_supports");
  downloadUrlArray.push(
    isMultiPieceChamber ? "split_pieces_chamber" : "single_piece_chamber",
  );
  const downloadUrl = `${downloadUrlArray.join("_")}.zip`;

  return (
    <HovalinSelectionContext.Provider
      value={{
        downloadUrl,
        isMultiPieceChamber,
        setIsMultiPieceChamber,
        hovalinSizes,
        hovalinSize,
        setHovalinSize,
        hasSupports,
        setHasSupports,
        isDownloadModalOpen,
        setIsDownloadModalOpen,
      }}
    >
      {children}
    </HovalinSelectionContext.Provider>
  );
};
