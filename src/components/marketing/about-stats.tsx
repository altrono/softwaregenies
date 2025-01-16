"use client"

import { motion } from "framer-motion"
import { Users, Award, Globe, Smile } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Satisfied Clients",
  },
  {
    icon: Award,
    value: "150+",
    label: "Awards Received",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries Served",
  },
  {
    icon: Smile,
    value: "98%",
    label: "Client Satisfaction",
  },
]

export function AboutStats() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-purple-100 dark:bg-purple-900">
                <stat.icon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

