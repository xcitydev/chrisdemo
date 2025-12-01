"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "In just 6 weeks, I dropped 5kg and finally felt confident again. Christophe's accountability is next level!",
    author: "Daniel A.",
  },
  {
    quote: "I've never been consistent with fitness before, but Christophe's approach made it easy and sustainable.",
    author: "Sarah M.",
  },
  {
    quote: "The personalized workouts fit perfectly into my busy schedule. Best investment I've made in myself.",
    author: "Marcus T.",
  },
  {
    quote: "Christophe helped me build muscle and strength I didn't think was possible. His expertise is unmatched.",
    author: "Jennifer K.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What Clients Say</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-20 bg-primary mx-auto"
          />
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="h-full"
              >
                <Card className="bg-card border-2 border-border shadow-lg h-full">
                  <CardContent className="pt-6">
                    <motion.div
                      initial={{ rotate: -10, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <Quote className="h-10 w-10 text-primary mb-4" />
                    </motion.div>
                    <p className="text-lg mb-4 leading-relaxed text-foreground italic">{`"${testimonial.quote}"`}</p>
                    <p className="font-semibold text-primary">— {testimonial.author}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
