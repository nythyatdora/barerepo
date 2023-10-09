"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { Lenis } from "@studio-freight/react-lenis";
import { Layout } from "../(layouts)/Base";

function Scroll(): JSX.Element {
  const { scrollYProgress } = useScroll();

  const toLeft = useTransform(scrollYProgress, [0, 1], ["-20%", "-60%"]);
  const toRight = useTransform(scrollYProgress, [0, 1], ["-120%", "-80%"]);

  return (
    <Lenis root>
      <Layout>
        <div className="flex h-[200vh] flex-col justify-center overflow-hidden py-8 font-serif">
          <motion.div
            className="whitespace-nowrap text-[10vw] leading-[1em] dark:text-white"
            style={{
              x: toLeft,
            }}
          >
            Tempor exercitation sint excepteur fugiat sunt cillum aliquip
            excepteur commodo adipisicing ipsum officia occaecat.
          </motion.div>

          <div className="h-[50vh]" />

          <motion.div
            className="whitespace-nowrap text-[10vw] leading-[1em] dark:text-white"
            style={{
              x: toRight,
            }}
          >
            Culpa veniam pariatur culpa ipsum et enim cupidatat cillum nostrud
            excepteur do.
          </motion.div>
        </div>
      </Layout>
    </Lenis>
  );
}

export default Scroll;
