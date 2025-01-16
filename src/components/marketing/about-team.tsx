"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from 'lucide-react'

const team = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Mike Johnson",
    role: "Design Lead",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export function AboutTeam() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our talented team of professionals is dedicated to delivering exceptional results
            and helping our clients succeed in the digital landscape.
          </p>
        </div>
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
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{member.role}</p>
                    <div className="flex justify-center space-x-4">
                      <a href="#" className="text-gray-400 hover:text-purple-600">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-purple-600">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

