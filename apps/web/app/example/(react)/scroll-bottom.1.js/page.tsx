"use client";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useState } from "react";
import { Layout } from "../(layouts)/Base";

function ScrollBottom(): JSX.Element {
  const { scrollYProgress } = useScroll();
  const [reached, setReached] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 1) setReached(true);
    else setReached(false);
  });

  return (
    <Layout>
      <main className="h-[200vh]">
        <div className="fixed left-[50%] top-[50%] translate-x-[-50%] font-serif text-sm italic dark:text-white">
          (scroll to bottom)
        </div>

        <motion.div
          animate={{
            y: reached ? 0 : -100,
            x: "-50%",
            left: "50%",
          }}
          className="fixed top-0 mt-4 font-serif text-4xl text-black dark:text-white"
          initial={{
            y: -100,
            x: "-50%",
            left: "50%",
          }}
          transition={{
            ease: "linear",
          }}
        >
          You are finally reached the bottom.
        </motion.div>
      </main>
    </Layout>
  );
}

export default ScrollBottom;
