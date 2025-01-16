"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    content: "Working with this team has been an absolute pleasure. Their professionalism and expertise have helped us achieve our goals faster than we expected.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content: "The remote team's dedication and skill level exceeded our expectations. They've become an integral part of our success story.",
    rating: 5
  },
  {
    name: "Emily Williams",
    role: "Marketing Director",
    content: "Outstanding service and communication. The team's ability to adapt and deliver quality work consistently is remarkable.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 dark:bg-purple-950 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-400">
            Don t just take our word for it. Heres what our clients have to say about their experience working with us.
          </p>
        </div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {testimonials.map((testimonial, index) => (
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
              <Card className="border-gray-100">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
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

