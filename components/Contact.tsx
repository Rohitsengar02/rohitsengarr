"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Rohit Sengar" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="rohit@example.com" />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Your message here..."
                  className="min-h-[150px]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <Button
                  size="lg"
                  className="px-8"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}