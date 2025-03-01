"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"
import { motion } from "framer-motion"
import {
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiClerk,
  SiStrapi,
  SiPhp,
  SiLaravel,
  SiNextdotjs,
  SiBootstrap,
} from "react-icons/si"

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Clerk", icon: SiClerk, color: "#6C47FF" },
  { name: "Strapi", icon: SiStrapi, color: "#2F2E8B" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
]

const firstRow = skills.slice(0, skills.length / 2)
const secondRow = skills.slice(skills.length / 2)

const SkillCard = ({ name, icon: Icon, color }: { name: string; icon: React.ElementType; color: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative h-24 w-24 cursor-pointer overflow-hidden rounded-xl border p-4 m-2",
        "border-gray-200 bg-white shadow-sm",
        "dark:border-gray-800 dark:bg-gray-900",
      )}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Icon className="w-12 h-12 mb-2" style={{ color }} />
        <p className="text-xs font-medium text-center dark:text-white">{name}</p>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the technologies and tools I specialize in. My diverse skill set allows me to tackle a wide
            range of projects and challenges.
          </p>
        </motion.div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:40s] py-2">
            {firstRow.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s] py-2">
            {secondRow.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50 dark:from-gray-800"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50 dark:from-gray-800"></div>
        </div>
      </div>
    </section>
  )
}

