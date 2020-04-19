import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { routes } from "../../../routes";

interface TextProps {
  color: "primary" | "onBackground";
}
const Text = styled("div")<TextProps>`
  ${(p) => p.theme.typography.bodyText};
  ${(p) => p.theme.themedColor("color", p.color)}
`;
export interface BlogTag {
  onPress: () => void;
  title: string;
}

export const BlogTag: React.FC<BlogTag> = ({ onPress, title }) => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const color =
    typeof window === "undefined" ||
    window.location.hash.replace("#", "") !== title
      ? "primary"
      : "onBackground";

  if (!mounted) {
    return null;
  }

  return (
    <Link to={`${routes.BLOG}#${title}`}>
      <Text color={color} onClick={onPress}>
        {`\u00A0#${title}\u00A0`}
      </Text>
    </Link>
  );
};
