"use client";
import type { CSSProperties } from "react";
import cx from "cx";
import { useId } from "react";
import { Layout } from "../(layouts)/Base";
import styles from "./index.module.css";

interface ItemProps {
  className?: string;
}

function Item(props: ItemProps): JSX.Element {
  const id = useId();
  return (
    <ul
      className={cx(
        "flex flex-row gap-4 whitespace-nowrap font-serif text-8xl italic dark:text-white",
        props.className,
      )}
      data-motion-id={id}
      style={
        {
          "--duration": "25s",
        } as CSSProperties
      }
    >
      {Array.from({ length: 6 }).map((_, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <li key={`marquee-${index}`}>marquee</li>;
      })}
    </ul>
  );
}

function Example(): JSX.Element {
  return (
    <Layout>
      <main className="flex flex-1 items-center">
        <section className="relative flex flex-row gap-4 overflow-hidden">
          <Item className={styles.marquee} />
          <Item className={styles.marqueeClone} />
        </section>
      </main>
    </Layout>
  );
}

export default Example;
