"use client"

import { motion } from "framer-motion"
import { Code, Palette, Megaphone, TrendingUp, Users, Zap } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"

const services = [
  {
    icon: Palette,
    title: 'AI SaaS Applications',
    description: "Leverage the power of artificial intelligence to streamline operations, enhance customer experiences, and improve decision-making with our AI-driven SaaS applications."
  },
  {
    icon: Users,
    title: 'Mobile Development',
    description: "Need a custom mobile app? Our expert development team creates user-friendly, secure, and scalable solutions tailored to your business needs"
  },
  {
    icon: Zap,
    title: 'Ready-Made Templates',
    description: "Get started quickly with our collection of professionally designed, customizable templates for websites, mobile apps, and more."
  },

  {
    icon: Code,
    title: "Web Development",
    description: "We create responsive and performant web applications tailored to your needs."
  },
  
  {
    icon: Megaphone,
    title: "SEO Optimization",
    description: "SEO is the backbone of any successful online presence. With our expert SEO services, we help you rank higher on search engines, drive organic traffic, and increase visibility."
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Strategic solutions to scale your business and increase market share."
  },
 

]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export function ServicesSection() {
  return (
    <section className="py-24 dark:bg-purple-950 bg-slate-100">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Our <span className="text-purple-600 mt-10">Services</span>
          </motion.h2>
          <motion.p 
            className="text-gray-700 text-lg dark:text-gray-400"
            variants={itemVariants}
          >
            We provide comprehensive solutions to help your business thrive in the digital age.
            Our services are designed to maximize efficiency and drive growth.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full dark:bg-black/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center justify-center flex-col">
                  <service.icon className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center mt-10">
        <Button>Get started</Button>
      </div>
    </section>
  )
}

