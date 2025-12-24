import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Minimal motion primitives so the site feels "built" instead of "templated".
 * - Respects prefers-reduced-motion.
 * - Keeps animations subtle + premium.
 */

export const FadeIn: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export const Stagger: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={
        reduce
          ? undefined
          : {
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reduce
          ? undefined
          : {
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
};
