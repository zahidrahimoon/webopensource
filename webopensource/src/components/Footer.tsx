"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="w-full border-t bg-background font-playfair">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* GitHub on the left */}
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <Link href="https://github.com/zahidrahimoon" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
          </Button>

          {/* Copyright and creator info in center */}
          <p className="text-sm text-muted-foreground text-center mx-2">
            © {year} Open Source Projects. All rights reserved. Created by{" "}
            <Link
              href="https://linkedin.com/in/zahidrahimoon"
              className="font-medium text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Muhammad Zahid
            </Link>
          </p>

          {/* LinkedIn on the right */}
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <Link href="https://linkedin.com/in/zahidrahimoon" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

