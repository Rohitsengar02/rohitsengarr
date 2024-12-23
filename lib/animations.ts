import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const projectHover: Variants = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    rotateX: 10,
    rotateY: -10,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export const beamVariants: Variants = {
  rest: {
    opacity: 0,
    height: 0,
  },
  hover: {
    opacity: 1,
    height: "200px",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};