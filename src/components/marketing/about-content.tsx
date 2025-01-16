"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AboutContent() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/about-banner.png"
              alt="Team members"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About Us: Ovaxo</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Start working with Ovaxo that can provide everything you need to generate
              awareness, drive traffic, connect. We re a team of dedicated professionals
              who are passionate about delivering exceptional results for our clients.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our mission is to help businesses thrive in the digital age by providing
              innovative solutions and strategic guidance. With years of experience and
              a commitment to excellence, we ve helped numerous organizations achieve their goals.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Read More →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

