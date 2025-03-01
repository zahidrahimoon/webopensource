import type React from "react"
import Image from "next/image"
import { Github } from "lucide-react"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

interface Project {
  id: number
  name: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden group">
      <CardHeader className="p-0">
        <div className="relative h-[250px] w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-3 font-playfair text-2xl font-medium">{project.name}</CardTitle>
        <p className="text-sm text-muted-foreground mb-5 line-clamp-7">{project.description}</p>
        <div className="flex flex-wrap gap-2.5">
          {project.technologies.slice(0, 5).map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-5 py-2 rounded-md text-xs font-medium bg-secondary/80 hover:bg-secondary"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          variant="outline"
          className="w-full bg-gray-900 text-white"
          asChild
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard

