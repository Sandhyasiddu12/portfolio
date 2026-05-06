"use client";

import {
  motion,
  type HTMLMotionProps,
  type Transition,
  type Variants,
} from "framer-motion";

type RevealVariant = "up" | "left" | "right" | "scale" | "rotate";

type RevealProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
  threshold?: number;
  variant?: RevealVariant;
};

const variantMap: Record<RevealVariant, Variants> = {
  up: {
    hidden: { opacity: 0, y: 36, filter: "blur(12px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  left: {
    hidden: { opacity: 0, x: -40, filter: "blur(12px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  right: {
    hidden: { opacity: 0, x: 40, filter: "blur(12px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92, filter: "blur(16px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -4, y: 24, filter: "blur(12px)" },
    visible: { opacity: 1, rotate: 0, y: 0, filter: "blur(0px)" },
  },
};

export default function Reveal({
  children,
  delay = 0,
  once = true,
  threshold = 0.2,
  transition,
  variant = "up",
  ...props
}: RevealProps) {
  const baseTransition: Transition = {
    duration: 0.72,
    delay: delay / 1000,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variantMap[variant]}
      transition={transition ?? baseTransition}
      {...props}
    >
      {children}
    </motion.div>
  );
}
