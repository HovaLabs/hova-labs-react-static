import React from "react";

type Props = {
  children: React.ReactNode;
};

const FancyDiv: React.FC = ({ children }: Props) => (
  <div style={{ border: "1px solid red" }}>{children}</div>
);
export default FancyDiv;
