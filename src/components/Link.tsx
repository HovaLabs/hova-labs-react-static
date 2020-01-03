import { Link as LinkLib } from "@reach/router";
import { Colors, createStyledComponent } from "@hova-labs/bento-box-web";

export const Link = createStyledComponent(LinkLib)(c => {
  const colorKey = c.theme.typography.headingMedium.color as keyof Colors;

  const styleVal = {
    marginLeft: c.theme.spacings.xl,
    ...c.theme.typography.headingMedium,
    color: c.theme.colors[colorKey]
  };

  return styleVal;
});
