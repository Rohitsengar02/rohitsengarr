"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block"
        variants={variants}
        animate="default"
        style={{
          position: "fixed",
          zIndex: 999,
          pointerEvents: "none",
          width: "32px",
          height: "32px",
          background: "rgba(255, 69, 0, 0.2)",
          borderRadius: "50%",
          backdropFilter: "blur(4px)",
        }}
      />
      <motion.div
        className="cursor-dot-outline hidden md:block"
        variants={variants}
        animate="default"
        style={{
          position: "fixed",
          zIndex: 999,
          pointerEvents: "none",
          width: "8px",
          height: "8px",
          background: "rgb(255, 69, 0)",
          borderRadius: "50%",
          transform: "translate(12px, 12px)",
        }}
      />
    </>
  );
}