// Taken from https://github.com/adazzle/react-data-grid/blob/631c653699e396feff507bb32b6df88add552adf/src/editors/ClickOutside.tsx
import React from "react";

interface Props {
  children: React.ReactElement;
  onClickOutside: () => void;
  leftClick?: boolean;
  rightClick?: boolean;
}

export const ClickOutside = ({
  onClickOutside,
  children,
  leftClick,
  rightClick,
}: Props): React.ReactElement => {
  const isClickedInside = React.useRef(false);

  React.useEffect(() => {
    const handleDocumentClick = (e: Event): void => {
      if (!e.isTrusted) {
        return;
      }

      if (isClickedInside.current) {
        isClickedInside.current = false;
      } else {
        onClickOutside();
      }
    };

    if (leftClick) {
      document.addEventListener("click", handleDocumentClick);
    }
    if (rightClick) {
      document.addEventListener("contextmenu", handleDocumentClick);
    }
    return () => {
      if (leftClick) {
        document.removeEventListener("click", handleDocumentClick);
      }
      if (rightClick) {
        document.removeEventListener("contextmenu", handleDocumentClick);
      }
    };
  }, [leftClick, onClickOutside, rightClick]);

  return React.cloneElement(React.Children.only(children), {
    onClickCapture() {
      isClickedInside.current = true;
    },
  });
};
ClickOutside.defaultProps = {
  leftClick: true,
  rightClick: false,
};
