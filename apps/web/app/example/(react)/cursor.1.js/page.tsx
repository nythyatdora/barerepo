"use client";
import cx from "cx";
import useResizeObserver from "use-resize-observer";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Layout } from "../(layouts)/Base";

function Cursor(): JSX.Element {
  const {
    ref,
    width = 0,
    height = 0,
  } = useResizeObserver({ box: "border-box" });
  const [hasMoved, setHasMoved] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    setHasMoved(true);
    setX(clientX);
    setY(clientY);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove, false);

    return () => {
      window.removeEventListener("mousemove", onMouseMove, false);
    };
  }, []);

  return (
    <div
      className={cx(
        "pointer-events-none fixed left-0 top-0 z-10 min-h-screen w-full overflow-hidden",
        hasMoved ? "opacity-100" : "opacity-0",
      )}
    >
      <motion.div
        className="absolute h-[24px] w-[24px] rounded-full border-2 border-black dark:border-white"
        ref={ref}
        style={{
          x: x - width / 2,
          y: y - height / 2,
        }}
      />
    </div>
  );
}

function CursorDemo(): JSX.Element {
  const pathname = usePathname();

  return (
    <Layout>
      <Cursor />
      {pathname === "/example/cursor.1.js" && (
        <style global jsx>{`
          * {
            cursor: none !important;
          }
        `}</style>
      )}
    </Layout>
  );
}

export default CursorDemo;
