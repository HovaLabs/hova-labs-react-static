import React from "react";

interface WebsiteContainerInterface {
  children: JSX.Element[] | JSX.Element;
}

export const WebsiteContainer = ({
  children
}: WebsiteContainerInterface): JSX.Element => (
  <div
    style={{
      background: "white",
      padding: "32px"
    }}
  >
    {children}
  </div>
);
