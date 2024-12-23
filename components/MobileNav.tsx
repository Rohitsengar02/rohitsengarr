"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, FolderOpen, User, Mail, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/projects", icon: FolderOpen, label: "Projects" },
  { href: "/about", icon: User, label: "About" },
  { href: "/contact", icon: Mail, label: "Contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-4 md:hidden z-50">
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="w-fit"
      >
        <motion.div 
          className="flex items-center justify-between gap-3 bg-background/80 backdrop-blur-lg border rounded-full p-2 shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link key={item.href} href={item.href} className="relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full flex flex-col items-center justify-center relative ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  <Icon className="w-5 h-5" />
                  <motion.span 
                    className="text-[10px] absolute -bottom-4 opacity-0 whitespace-nowrap"
                    animate={{ 
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 5
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </motion.nav>
    </div>
  );
}