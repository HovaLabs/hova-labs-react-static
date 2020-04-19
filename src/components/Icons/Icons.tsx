// In this file we'll keep track of all of the icons we're using
// To keep down the size of the bundle we'll only import icons that we're using
import React from "react";
import { IconBaseProps } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoCheck } from "react-icons/go";
import { IoMdWarning } from "react-icons/io";
import { MdClose } from "react-icons/md";

import styled from "styled-components";

const icons = {
  GiHamburgerMenu,
  GoCheck,
  IoMdWarning,
  MdClose,
};

interface IconComponentProps extends IconBaseProps {
  name: "GiHamburgerMenu" | "MdClose"; // | "Foo"
}
const IconComponent: React.FC<IconComponentProps> = ({ name, ...rest }) => {
  const Component = icons[name];
  return <Component {...rest} />;
};

export const Icons = styled(IconComponent).attrs((p) => ({
  size: p.theme.spacings.xl,
}))`
  ${(p) => p.theme.themedColor("color", "primary")}
  ${(p) => p.theme.themedColor("stroke", "primary")}
  ${(p) => p.theme.themedColor("fill", "primary")}
`;
