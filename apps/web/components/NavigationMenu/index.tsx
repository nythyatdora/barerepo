"use client";
import { tv } from "tva";
import NextLink from "next/link";
import { usePreviousPathname } from "@/components/NavigationSession";

const base = tv({
  slots: {
    list: "flex flex-col gap-8",
    listItem:
      "flex flex-row font-serif text-8xl items-center cursor-pointer dark:text-white hover:underline",
    dot: "w-[16px] h-[16px] rounded-full border-2 border-black mt-[-16px] mr-4",
  },
});

function NavigationMenu(): JSX.Element {
  const styles = base();
  const previousPathname = usePreviousPathname();

  return (
    <>
      <nav className="fixed left-0 top-0 z-[10] h-[100vh] w-full overflow-hidden bg-white p-4 dark:bg-black">
        <div className="relative p-4">
          <NextLink
            className="absolute right-0 top-0 cursor-pointer font-serif text-2xl hover:underline dark:text-white"
            href={previousPathname}
            replace
            scroll={false}
          >
            Close
          </NextLink>

          <ul className={styles.list()}>
            <li className={styles.listItem()}>
              <NextLink href="/">/</NextLink>
            </li>

            <li className={styles.listItem()}>
              <NextLink href="/examples">/examples</NextLink>
            </li>

            <li className={styles.listItem()}>
              <NextLink href="/contact">/contact</NextLink>
            </li>
          </ul>
        </div>
      </nav>

      <style global jsx>
        {`
          html,
          body {
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
}

export { NavigationMenu };
