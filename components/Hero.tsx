"use client";

import { motion } from "framer-motion";
import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden py-12 md:py-0">
      {/* Background Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/20 rounded-full blur-3xl"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}