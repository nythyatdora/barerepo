"use client";
import NextImage from "next/image";
import { motion } from "framer-motion";
import svg from "./construction.svg";

function Construction(): JSX.Element {
  return (
    <div className="fixed bottom-[64px] right-[32px] dark:invert-[100%]">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <NextImage alt="Wesite is still in construction." src={svg as string} />
      </motion.div>
    </div>
  );
}

export { Construction };
