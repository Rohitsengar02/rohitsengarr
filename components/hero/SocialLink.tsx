"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  delay: number;
}

export default function SocialLink({ href, icon: Icon, label, delay }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}