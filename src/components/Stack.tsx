import React from "react";
import { Spacer } from "./Spacer";

export const Stack: React.FC<{
  direction: "vertical" | "horizontal";
  space: number | string;
}> = ({ children, direction, space }) => (
  <div
    style={{
      display: "flex",
      flexDirection: direction === "vertical" ? "column" : "row",
    }}
  >
    {React.Children.map(children, (child, index) => (
      <>
        {index === 0 ? null : (
          <Spacer
            width={direction === "vertical" ? 0 : space}
            height={direction === "vertical" ? space : 0}
          />
        )}
        {child}
      </>
    ))}
  </div>
);
