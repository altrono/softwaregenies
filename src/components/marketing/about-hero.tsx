"use client"
import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <div className="relative min-h-[40vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/80" />
        <img
          src="/bg-5.jpg"
          alt="Office background"
          className="w-full h-full object-cover"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Company Story
        </h1>
      </motion.div>
    </div>
  )
}

