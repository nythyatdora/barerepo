import type { LinkProps } from "next/link";

export const getExamplePath = (name): LinkProps["href"] => `/examples/${name}`;
