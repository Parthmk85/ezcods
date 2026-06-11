"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

const items = ["Design", "Develop", "Deliver"];

export function Tagline() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.18, delayChildren: 0.4 } },
      }}
      className="mt-9 flex items-center justify-center gap-4 sm:gap-6"
    >
      {items.map((word, i) => (
        <Fragment key={word}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ type: "spring", stiffness: 140, damping: 20 }}
            className="flex items-baseline gap-1.5 sm:gap-2"
          >
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-white/35">
              We
            </span>
            <span className="text-sm sm:text-lg font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              {word}
            </span>
          </motion.div>

          {i < items.length - 1 && (
            <span className="h-1 w-1 shrink-0 rounded-full bg-white/25" />
          )}
        </Fragment>
      ))}
    </motion.div>
  );
}
