"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Layers,
  Database,
  Cloud,
  Smartphone,
  GitBranch,
} from "lucide-react";
import SkillCard from "./skills/SkillCard";

const skills = [
  {
    category: "Frontend Development",
    icon: Layout,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend Development",
    icon: Code2,
    skills: ["Node.js", "Express", "RESTful APIs"],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL",  "Firebase", "Prisma"],
  },
  {
    category: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab", "vercel"],
  },
  {
    category: "Cloud Services",
    icon: Cloud,
    skills: ["AWS", "Google Cloud"],
  },
  {
    category: "Data Structure",
    icon: Layers,
    skills: ["Java + DSA"],
  },
  
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Leveraging cutting-edge technologies to build innovative solutions.
            Continuously learning and adapting to new challenges.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              category={skill.category}
              icon={skill.icon}
              skills={skill.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}