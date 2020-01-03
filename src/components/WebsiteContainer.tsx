import { createStyledComponent } from "@hova-labs/bento-box-web";

export const WebsiteContainer = createStyledComponent("div")(c => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: c.theme.colors.backgroundPrimary,
  padding: c.theme.spacings.xl
}));
