"use client"

import { motion } from "framer-motion"

export function TransformationsSection() {
  const transformations = [
    { image: "/before-after-fitness-transformation-weight-loss.jpg" },
    { image: "/muscle-gain-transformation-gym-results.jpg" },
    { image: "/fitness-journey-body-recomposition.jpg" },
    { image: "/strength-training-transformation-results.jpg" },
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="transformations" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{"Real Results from Real People 💪"}</h2>
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
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="relative overflow-hidden rounded-lg shadow-lg aspect-video"
            >
              <motion.img
                src={item.image || "/placeholder.svg"}
                alt={`Transformation ${index + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
