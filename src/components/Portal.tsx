import React from "react";
import ReactDOM from "react-dom";

const createDivWithId = (id: string): HTMLDivElement | null => {
  if (typeof document !== "undefined") {
    const divWithId = document.createElement("div");
    divWithId.id = id;
    return divWithId;
  }
  return null;
};

// Idempotently create the "portal-target"
const PORTAL_TARGET_ID = "portal-target";
let portalTarget: any;
if (typeof document !== "undefined") {
  portalTarget =
    document.getElementById(PORTAL_TARGET_ID) ||
    document.body.appendChild(createDivWithId(PORTAL_TARGET_ID));
}

export const Portal = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactPortal | any => {
  if (typeof document === "undefined") {
    const mockPortal = (): React.ReactElement => null as any;
    return mockPortal;
  }
  const [el] = React.useState(document.createElement("div"));
  React.useEffect(() => {
    portalTarget.appendChild(el);
    return (): void => {
      portalTarget.removeChild(el);
    };
  }, []);

  const foo = ReactDOM.createPortal(children, el);
  return foo;
};
