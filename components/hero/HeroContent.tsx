"use client";

import { motion } from "framer-motion";
import { ArrowRight, Contact,  Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLink from "./SocialLink";

export default function HeroContent() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Rohitsengar02", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/therohitsengar", label: "LinkedIn" },
    { icon: Contact, href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex-1 pt-24 lg:pt-32 px-0 md:px-4 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 max-w-xl mx-auto md:mx-0"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Available for Work
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-primary relative">
            Rohit Sengar
            <motion.span
              className="absolute -z-10 bottom-0 left-0 w-full h-3 bg-primary/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-muted-foreground"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-muted-foreground text-base md:text-lg"
        >
          Crafting exceptional digital experiences with modern technologies.
          Focused on building scalable, accessible, and user-centered applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 pt-6"
        >
          <Button size="lg" className="group w-full sm:w-auto">
            <a href="/projects">View My Work</a>
            <motion.span
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.span>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Download CV
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex justify-center md:justify-start gap-4 pt-8"
        >
          {socialLinks.map((social, index) => (
            <SocialLink
              key={index}
              href={social.href}
              icon={social.icon}
              label={social.label}
              delay={0.8 + index * 0.1}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}