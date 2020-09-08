import styled from "styled-components";

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

interface SpacerProps {
  width: string | number;
  height: string | number;
  flex: string | number;
}

export const Spacer = styled("div")<RequireAtLeastOne<SpacerProps>>`
  min-width: 0;
  min-height: 0;
  ${(p) => (p.width ? `width: ${p.width};` : "")}
  ${(p) => (p.height ? `height: ${p.height};` : "")}
  ${(p) => (p.flex ? `flex: ${p.flex};` : "")}
`;
