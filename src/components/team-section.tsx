"use client"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import Image from "next/image"

export function TeamSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 px-5 max-w-7xl mx-auto ">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            
            <div className="md:pt-5">
              <h2 className="text-3xl font-bold ">
                Work with a Professional Remote Team
              </h2>
              <p className="text-gray-400 text-md mb-2">
                Our remote teams are composed of highly skilled professionals who bring years of experience
                and expertise to your projects. We ensure seamless collaboration and exceptional results
                through our proven methodologies and advanced communication tools.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-2">
                {[
                  { number: "95%", label: "Client Satisfaction" },
                  { number: "500+", label: "Projects Completed" },
                  { number: "24/7", label: "Support Available" },
                  { number: "100+", label: "Expert Team Members" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 dark:bg-slate-700 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">{stat.number}</div>
                    <div className="text-sm dark:text-white/70 text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button className="bg-purple-600  text-white hover:bg-purple-700">
                Learn More About Our Team
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className=" items-center justify-center ">
            
              <Image
                src="/expert-5.jpg"
                alt="Team collaboration"
                width={500}
                height={450}
                className="rounded-sm shadow-lg mx-auto min-w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

