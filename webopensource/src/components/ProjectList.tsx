"use client"

import { useState, useEffect } from "react"
import ProjectCard from "./ProjectCard"
import ProjectListSkeleton from "./ProjectListSkeleton"
import { projectsData } from "@/data/projects"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

const PROJECTS_PER_PAGE = 9 

const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject)

  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE)

  if (loading) {
    return <ProjectListSkeleton />
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-end space-x-2">
        <motion.button 
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="h-6 w-6" />
        </motion.button>
        <motion.button 
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowRight className="h-6 w-6" />
        </motion.button>
      </div>
    </div>
  )
}

export default ProjectList
