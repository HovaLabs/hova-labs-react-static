import React from "react";
import { getMaxWindowDimension } from "./ModalsMobileNavBackgroundUtils";
import * as S from "./ModalsMobileNavBackgroundStyles";

const ModalsMobileNavBackground: React.FC<{ isOpen: boolean }> = ({
  isOpen,
}) => {
  const [maxDimension, setMaxDimension] = React.useState(
    getMaxWindowDimension()
  );

  React.useEffect(() => {
    const setMaxWindowDimension = (): void => {
      setMaxDimension(getMaxWindowDimension());
    };

    window.addEventListener("resize", setMaxWindowDimension);
    return (): void => {
      window.removeEventListener("resize", setMaxWindowDimension);
    };
  }, [setMaxDimension]);

  return (
    <S.OuterContainer>
      <S.CircleDiv isOpen={isOpen} radius={maxDimension} />
    </S.OuterContainer>
  );
};

export default ModalsMobileNavBackground;
