// In this file we'll keep track of all of the icons we're using
// To keep down the size of the bundle we'll only import icons that we're using
import React from "react";
import { IconBaseProps } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import styled from "styled-components";

const icons = {
  GiHamburgerMenu,
  MdClose,
};

interface IconComponentProps extends IconBaseProps {
  name: "GiHamburgerMenu" | "MdClose"; // | "Foo"
}
const IconComponent: React.FC<IconComponentProps> = ({ name, ...rest }) => {
  const Component = icons[name];
  return <Component {...rest} />;
};

export const Icons = styled(IconComponent).attrs(p => ({
  size: p.theme.spacings.xl,
}))`
  color: ${p => p.theme.colors.primary};
  stroke: ${p => p.theme.colors.primary};
  fill: ${p => p.theme.colors.primary};
`;
