"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "RUDRAM - Digital Diary",
    description: "Your Digital Diary Journey - Capture your thoughts, memories, and experiences in a beautiful and secure digital space.",
    image: "/pro1.png",
    github: "https://personal-diary-app-by-rohit-2e587vxla-rohit-sengars-projects.vercel.app/",
    live: "https://personal-diary-app-by-rohit-2e587vxla-rohit-sengars-projects.vercel.app/",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Clerk", "Framer Motion", "etc"],
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application powered by OpenAI's GPT-4, featuring context-aware conversations and multi-language support.",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&q=80",
    github: "#",
    live: "#",
    tags: ["React", "OpenAI", "Socket.io"],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website with animated interactions, 3D effects, and responsive design showcasing creative projects.",
    image: "/pro3.png",
    github: "/",
    live: "/",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "FireBase"],
  },
  {
    title: "Task Management App",
    description: "Collaborative task management platform with real-time updates, team collaboration features, and progress tracking.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    github: "#",
    live: "#",
    tags: ["React", "Redux", "Node.js"],
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking application with interactive maps, historical data analysis, and severe weather alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    github: "#",
    live: "#",
    tags: ["React", "Weather API", "Chart.js"],
  },
  {
    title: "Social Media Platform",
    description: "Full-stack social media application with real-time messaging, content sharing, and advanced user interactions.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    github: "#",
    live: "#",
    tags: ["Next.js", "GraphQL", "MongoDB"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          My Projects
        </motion.h1>
        
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-16"
        >
          Explore my portfolio of projects showcasing my skills in web development, from interactive applications to responsive designs.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}