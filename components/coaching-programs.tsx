"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Dumbbell, FileText } from "lucide-react"

const programs = [
  {
    icon: Users,
    title: "1-on-1 Online Coaching",
    description: "Personalized workouts, nutrition guidance, and progress tracking tailored to your goals.",
  },
  {
    icon: Dumbbell,
    title: "In-Gym Coaching",
    description: "Hands-on training and support in your local area with direct form correction.",
  },
  {
    icon: FileText,
    title: "Custom Workout Plan",
    description: "Tailored plans designed around your goals and equipment availability.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function CoachingPrograms() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="programs" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Coaching Programs</h2>
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
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="h-full"
                >
                  <Card className="bg-card border-0 shadow-xl hover:shadow-2xl transition-shadow h-full">
                    <CardHeader className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="mx-auto mb-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center"
                      >
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </motion.div>
                      <CardTitle className="text-2xl font-bold">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-base mb-6 leading-relaxed">{program.description}</CardDescription>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          onClick={scrollToBooking}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          Book a Free Consultation
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
