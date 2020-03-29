import styled from "styled-components";

export const OuterContainer = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("display", {
      s: "block",
      m: "block",
      l: "flex",
    })}
`;

export const ContentContainer = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("flex-basis", {
      s: "100%",
      m: "100%",
      l: "50%",
    })}
`;
