"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

// Animation variants
const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function HeroSection() {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gray-900"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-4"
        variants={fadeInUp}
      >
        Hi, I'm Muhammad Zahid
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-white/90 mb-8"
        variants={fadeInUp}
      >
        Full-Stack Developer | UI/UX Enthusiast
      </motion.p>
      <motion.div variants={fadeInUp}>
        <div className="flex space-x-4">
          <Button asChild variant="outline">
            <Link href="mailto:your.email@example.com">
              <Mail className="mr-2 h-4 w-4" /> Email
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Link>
          </Button>
        </div>
      </motion.div>
    </motion.section>
  );
}
