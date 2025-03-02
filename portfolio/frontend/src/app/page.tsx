"use client"

import { BlogSection } from "@/components/blog-section"
import { CTASection } from "@/components/cta-section"
import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/project-section"
import { ContactSection } from "@/components/contact-section"
import ServicesSection from "@/components/services-section"

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
      <CTASection />
    </div>
  )
}

