import React from "react";
import ReactDOM from "react-dom";

const createDivWithId = (id: string): HTMLDivElement => {
  const divWithId = document.createElement("div");
  divWithId.id = id;
  return divWithId;
};

// Idempotently create the "portal-target"
const PORTAL_TARGET_ID = "portal-target";
const portalTarget =
  document.getElementById(PORTAL_TARGET_ID) ||
  document.body.appendChild(createDivWithId(PORTAL_TARGET_ID));

export const Portal = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactPortal => {
  const [el] = React.useState(document.createElement("div"));
  React.useEffect(() => {
    portalTarget.appendChild(el);
    return (): void => {
      portalTarget.removeChild(el);
    };
  }, []);

  return ReactDOM.createPortal(children, el);
};
