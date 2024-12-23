"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Mail, Github, Linkedin, Twitter, Contact } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8"
          >
            About Me
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="col-span-1"
            >
              <div className="relative rounded-xl overflow-hidden mb-4">
                <img
                  src="/heroimg.jpg"
                  alt="Rohit Sengar"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Ghaziabad, India</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>rohitsengar02@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2.5+ Years Experience</span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/Rohitsengar02"
                  className="p-2 bg-primary/10 rounded-full"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com/in/therohitsengar"
                  className="p-2 bg-primary/10 rounded-full"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="/contact"
                  className="p-2 bg-primary/10 rounded-full"
                >
                  <Contact className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">Background</h2>
                <p className="text-muted-foreground">
                  I am a passionate Full Stack Developer with over 5 years of experience in creating innovative web solutions. My journey in technology began with a deep curiosity for building things that make a difference in people's lives.
                </p>
              </div>

              

              <div>
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold">Bachelor of Technology in Computer Science</h3>
                  <p className="text-muted-foreground">ABESIT , Ghaziabad • 2022 - 2026</p>
                </div>
              </div>
              <div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold">10+2</h3>
                  <p className="text-muted-foreground">BLS International School, Hathras •  2021</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}