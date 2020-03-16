import styled from "styled-components";

export const Divider = styled("hr")`
  border: ${p => `3px solid ${p.theme.colors.onSurface1}`};
  ${p =>
    p.theme.responsiveStyle("margin-bottom", {
      s: `${p.theme.spacings.xl}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
`;

export const NoteArea = styled("div")`
  padding-top: ${p => `${p.theme.spacings.xl}px`};
`;

export const StoreArea = styled("div")`
  justify-content: center;
  ${p =>
    p.theme.responsiveStyle("display", {
      s: "block",
      l: "flex",
    })}
`;

export const TextCost = styled("div")`
  padding-top: ${p => `${p.theme.spacings.l}px`};
`;

export const TextIncludes = styled("div")`
  padding-top: ${p => `${p.theme.spacings.l}px`};
`;
