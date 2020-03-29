import styled from "styled-components";

// COPYRIGHT START
export const ContainerCopyright = styled("div")`
${(p) =>
  p.theme.responsiveStyle("padding", {
    s: `${p.theme.spacings.l}px`,
    l: `${p.theme.spacings.l}px`,
  })}
background-color: ${(p) => p.theme.colors.surface1};
`;

// MAILING LIST
export const ContainerMailingList = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("display", {
      s: "block",
      l: "block",
      xl: "flex",
    })}
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.l}px`,
    })}
  justify-content: space-between;
`;

export const Form = styled("form")`
  ${(p) =>
    p.theme.responsiveStyle("display", {
      s: "block",
      l: "flex",
      xl: "flex",
    })}
  justify-content: space-between;
  ${(p) =>
    p.theme.responsiveStyle("margin-top", {
      s: `${p.theme.spacings.l}px`,
      m: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.l}px`,
      xl: 0,
    })}
  margin-top: ${(p) => `${p.theme.spacings.l}px`};
  max-width: 700px;
  width: 100%;
`;

export const InputArea = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.m}px 0`,
      l: "0",
    })}
  justify-content: space-between;
`;
