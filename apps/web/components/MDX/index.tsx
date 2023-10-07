import type React from "react";

export * from "./H1";
export * from "./H2";
export * from "./P";
export * from "./A";

export type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadElement>,
  HTMLHeadingElement
>;
