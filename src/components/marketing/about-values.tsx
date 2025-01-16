"use client"

import { motion } from "framer-motion"
import { Target, Heart, Shield, Zap } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: "Our Vision",
    description: "To become the leading digital transformation partner for businesses worldwide.",
  },
  {
    icon: Heart,
    title: "Our Mission",
    description: "To deliver innovative solutions that drive growth and success for our clients.",
  },
  {
    icon: Shield,
    title: "Our Values",
    description: "Integrity, excellence, and commitment to client success guide everything we do.",
  },
  {
    icon: Zap,
    title: "Our Approach",
    description: "We combine creativity, technology, and strategy to deliver exceptional results.",
  },
]

export function AboutValues() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-purple-100 dark:bg-purple-900">
                <value.icon className="w-8 h-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

