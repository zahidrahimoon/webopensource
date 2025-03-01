"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle } from "lucide-react"
import blog from '@/app/assests/bloog.jpg';


const blogs = [
  {
    image: blog,
    title: "The Evolution of Mobile App Development: Trends to Watch in 2025",
    date: "January 13, 2025",
    comments: "No Comments",
    link: "#",
  },
  {
    image: blog,
    title: "How Small Software Companies Are Outsmarting the Giants",
    date: "January 13, 2025",
    comments: "No Comments",
    link: "#",
  },
  {
    image: blog,
    title: "Celebrating Our Achievement: AI Health Innovation Award at Pro Global AI Summit",
    date: "December 18, 2024",
    comments: "No Comments",
    link: "#",
  },
]

export function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">RECENT BLOGS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-semibold line-clamp-2 hover:text-purple-600 transition-colors">
                    <Link href={blog.link}>{blog.title}</Link>
                  </h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Button
                    variant="link"
                    className="p-0 h-auto font-semibold text-purple-600 hover:text-purple-700"
                    asChild
                  >
                    <Link href={blog.link}>READ MORE »</Link>
                  </Button>
                </CardContent>
                <CardFooter className="text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {blog.comments}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

