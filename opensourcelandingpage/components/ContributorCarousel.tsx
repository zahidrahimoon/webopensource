"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { contributorsData } from "@/data/contributors"

const ContributorCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === contributorsData.length - 1 ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-4">Our Contributors</h2>
      <div className="relative h-24 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Image
              src={contributorsData[currentIndex].avatar || "/placeholder.svg"}
              alt={contributorsData[currentIndex].name}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">{contributorsData[currentIndex].name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{contributorsData[currentIndex].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ContributorCarousel

