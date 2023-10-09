"use client";
import { motion, useScroll } from "framer-motion";
import { Layout } from "../(layouts)/Base";

function Progress(): JSX.Element {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 h-[4px] origin-[0%] bg-black dark:bg-white"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}

function ScrollProgress(): JSX.Element {
  return (
    <Layout>
      <Progress />

      <main className="h-[500vh]">
        <div className="fixed left-[50%] top-[50%] translate-x-[-50%] font-serif">
          (watch the top of the screen and keep scrolling)
        </div>
      </main>
    </Layout>
  );
}

export default ScrollProgress;
