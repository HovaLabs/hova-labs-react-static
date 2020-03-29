import styled from "styled-components";

export const ListItem = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("flex-basis", {
      s: "100%",
      m: "100%",
      l: "50%",
    })}
`;

export const List = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const Link = styled("a")`
  color: ${(p) => p.theme.colors.primary};
`;
