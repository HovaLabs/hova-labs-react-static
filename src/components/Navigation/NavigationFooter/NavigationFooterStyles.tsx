import styled from "styled-components";

// COPYRIGHT START
export const ContainerCopyright = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.l}px`,
    })}
`;

// MAILING LIST
export const ContainerMailingList = styled("div")`
  align-items: center;
  display: flex;
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

export const TitleArea = styled("div")`
  flex-basis: 40%;
`;

export const Input = styled("input")`
  background: ${(p) => p.theme.colors.surface1};
  border: ${(p) => `3px solid ${p.theme.colors.onSurface1}`};
  color: ${(p) => p.theme.colors.onSurface1};
  display: inline;
  ${(p) =>
    p.theme.responsiveStyle("margin-bottom", {
      s: `${p.theme.spacings.l}px`,
      m: `${p.theme.spacings.l}px`,
      l: 0,
      xl: 0,
    })}
  ${(p) =>
    p.theme.responsiveStyle("flex-basis", {
      s: "100%",
      m: "100%",
      l: "25%",
      xl: "25%",
    })}
  ${(p) =>
    p.theme.responsiveStyle("margin-right", {
      s: 0,
      m: 0,
      l: `${p.theme.spacings.l}px`,
      xl: `${p.theme.spacings.l}px`,
    })}
  padding: ${(p) => `${p.theme.spacings.m}px`};
  ${(p) => p.theme.typography.bodyText};
  width: 100%;
`;

export const InputsArea = styled("div")`
  ${(p) =>
    p.theme.responsiveStyle("display", {
      s: "block",
      l: "flex",
    })}
  margin-top: ${(p) => `${p.theme.spacings.m}px`};
  ${(p) =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.m}px 0`,
      l: "0",
    })}
  justify-content: space-between;
`;

export const StatusArea = styled("div")`
  display: flex;
  flex-basis: 100%;
  margin-top: ${(p) => `${p.theme.spacings.l}px`};
  & > div > a {
    color: ${(p) => p.theme.colors.primary};
  }
`;
