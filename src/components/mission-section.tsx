"use client"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { Medal } from "lucide-react"
import Image from "next/image"

export function MissionSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 px-5 max-w-6xl mx-auto">
      <div className="container mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-4 md:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className=" w-full">
              <Image
                src="/side-100.png"
                alt="Team collaboration"
                width={500}
                height={500}
                className="w-full rounded-sm max-h-[600px]"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto md:text-pretty">
              <h2 className="text-2xl font-bold">
              Achieving Success Together
              </h2>
              <p className="text-gray-400 mb-2">
              At <span className="text-purple-500 text-xl font-bold tracking-widest leading-[2rem]">Softwaregenies.online</span>, We believe in building long-term relationships, not just completing projects. Our goal is to help your business scale and succeed by providing the digital tools and expertise you need to stay competitive in the fast-evolving tech world. With our focus on results-driven solutions, you can trust us to deliver measurable growth and tangible outcomes.
              </p>
              <p className="text-gray-400 mb-1 text-left">
              How We Help You Succeed:
              </p>
              <ul className="about-list text-gray-400 text-left">
                <li className="has-before">
                    Software Design with 30 min free consultations
                </li>
                <li className="has-before">
                    Tailored Solutions: Products that are specifically designed to meet your needs. 
                </li>
                <li className="has-before">
                    End-to-End Support: From initial consultation to post-launch support.
                </li>
                <li className="has-before">
                Proven Expertise: Expertise to implement industry-leading solutions. 
                </li>
                <li className="has-before">
                Client-Centric Approach: Your satisfaction is our priority. 
                </li>
              </ul>

              <div className="flex flex-col  md:flex-row">
                <Button className="bg-purple-600 text-white hover:bg-purple-700">
                    Learn More About Our Team
                </Button>
                <button className="flex gap-2 items-center justify-center  rounded-lg">      
                    <Medal className="w-10 h-10 text-purple-500" />
                    <span className="text-purple-500">Work With the Experts</span>
                </button>
              </div>
              
            </div>
          </motion.div>
        </div>
       
      </div>
    </section>
  )
}

