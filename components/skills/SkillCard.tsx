"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  category: string;
  icon: LucideIcon;
  skills: string[];
  index: number;
}

export default function SkillCard({ category, icon: Icon, skills, index }: SkillCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group"
    >
      <div className="bg-card p-6 rounded-xl shadow-lg transform-gpu transition-all duration-200 group-hover:shadow-2xl">
        {/* 3D Lighting Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 rounded-xl blur transition duration-500" />
        
        {/* Content Container */}
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-primary/10 rounded-lg"
              style={{ transform: "translateZ(20px)" }}
            >
              <Icon className="w-6 h-6 text-primary" />
            </motion.div>
            <h3 
              className="text-xl font-semibold"
              style={{ transform: "translateZ(15px)" }}
            >
              {category}
            </h3>
          </div>
          
          <div 
            className="flex flex-wrap gap-2"
            style={{ transform: "translateZ(10px)" }}
          >
            {skills.map((skill, skillIndex) => (
              <motion.span
                key={skillIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-primary/5 rounded-full text-sm relative overflow-hidden group/skill"
              >
                <span className="relative z-10">{skill}</span>
                <motion.div
                  className="absolute inset-0 bg-primary/10 -z-10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}