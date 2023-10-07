/* eslint-disable no-console */
"use client";
import { useEffect, useRef } from "react";
import { Layout } from "../(layouts)/Base";

function Example(): JSX.Element {
  const mount = useRef(false);

  useEffect(() => {
    if (mount.current) return;

    console.log(
      "%cThis is example",
      "font-size: 32px; color: #000; font-weight: bold;",
    );

    console.log(
      "%cYou can style the console.log by using %c before the message.",
      "font-size: 12px; font-style: italic;",
    );

    mount.current = true;
  }, []);

  return (
    <Layout>
      <div className="p-4 font-serif text-sm italic text-black dark:text-white">
        (check console.log in dev tool)
      </div>
    </Layout>
  );
}

export default Example;
