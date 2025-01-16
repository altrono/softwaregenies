"use client"
import { Users, BarChart3, Rocket, Shield, Clock, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Users,
    title: "Team Management",
    description: "Manage your team efficiently with our comprehensive tools and features."
  },
  {
    icon: BarChart3,
    title: "Business Growth",
    description: "Track and accelerate your business growth with detailed analytics and insights."
  },
  {
    icon: Rocket,
    title: "Fast Development",
    description: "Accelerate your development process with our streamlined workflows."
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Keep your data safe with our enterprise-grade security measures."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Get round-the-clock support from our dedicated team of experts."
  },
  {
    icon: Zap,
    title: "Quick Solutions",
    description: "Find and implement solutions faster with our efficient processes."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600">
            We provide comprehensive solutions to help your business thrive in the digital age.
            Our features are designed to maximize efficiency and drive growth.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100
                  }
                }
              }}
            >
              <div className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

