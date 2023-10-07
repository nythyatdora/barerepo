"use client";

import NextLink from "next/link";
import { ToggleTheme } from "@/components/ToggleTheme";
import { getMenuPath } from "@/utilities/routings/getMenuPath";

function Header(): JSX.Element {
  return (
    <nav className="pointer-events-none fixed z-[9] flex w-full flex-row p-4 font-serif text-black dark:text-white">
      <div className="pointer-events-none flex-1" />
      <div className="pointer-events-auto flex flex-row gap-4 text-2xl">
        <ToggleTheme />

        <NextLink
          className="cursor-pointer self-end hover:underline"
          href={getMenuPath()}
          replace
          scroll={false}
          shallow
        >
          Menu
        </NextLink>
      </div>
    </nav>
  );
}

export { Header };
