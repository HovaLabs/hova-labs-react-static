import { Link as LinkLib } from "@reach/router";
import { createStyledComponent } from "@hova-labs/bento-box-web";

export const Link = createStyledComponent(LinkLib)(c => ({
  marginLeft: c.theme.spacings.xl,
  ...c.theme.typography.headingMedium
}));
