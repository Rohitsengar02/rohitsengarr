"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div ref={containerRef} className="flex-1 pt-22 lg:pt-20 relative max-w-[20rem] mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        style={{ y, rotate, scale }}
        className="relative w-full"
      >
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.3 }}
          className="absolute -top-4 -right-4 w-48 h-48 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.3 }}
          className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary rounded-full blur-3xl"
        />

        {/* Image Container */}
        <motion.div
          className="relative z-10 bg-gradient-to-b from-primary/20 to-primary/10 rounded-2xl p-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-muted">
            <img
              src="/heroimg.jpg"
              alt="Rohit Sengar"
              className="w-full h-full object-cover"
            />
            
            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-2 -right-2 bg-background/90 backdrop-blur-sm p-3 rounded-xl shadow-lg"
            >
              <p className="text-xs font-medium">Experience</p>
              <p className="text-2xl font-bold text-primary">5+</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.7,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -bottom-2 -left-2 bg-background/90 backdrop-blur-sm p-3 rounded-xl shadow-lg"
            >
              <p className="text-xs font-medium">Projects</p>
              <p className="text-2xl font-bold text-primary">50+</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}