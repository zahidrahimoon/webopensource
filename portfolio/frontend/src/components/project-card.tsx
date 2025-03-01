"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, tech = [], github, live }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
      className="h-full"
    >
      <div className="border rounded-lg overflow-hidden shadow-lg bg-white h-full flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl">
        <div className="relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <p className="text-white text-sm font-medium px-4 text-center">Click to view project details</p>
          </div>
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm flex-grow">{description}</p>

          {/* Technology Icons */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.length > 0 ? (
              tech.map((techItem, index) => (
                <span key={index} className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded-full font-medium">
                  {techItem}
                </span>
              ))
            ) : (
              <span className="text-gray-400 text-sm">No technologies listed</span>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-4 flex space-x-3">
            <Button variant="outline" asChild className="flex-1">
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>

            {live && (
              <Button variant="default" asChild className="flex-1">
                <Link href={live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
