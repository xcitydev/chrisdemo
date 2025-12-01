"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Meet Christophe Azimale</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 w-20 bg-primary"
            />
            <p className="text-lg leading-relaxed text-muted-foreground">
              {
                "I help busy professionals and beginners build strength, confidence, and lasting fitness habits — through structured workouts and consistent accountability."
              }
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {"Whether your goal is to gain muscle, lose fat, or get more disciplined — I'll help you make it happen."}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                asChild
                variant="outline"
                className="mt-4"
              >
                <a
                  href="https://youtube.com/@christophaziamale7201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Youtube className="h-5 w-5" />
                  Watch on YouTube
                </a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="/personal-trainer-working-with-client-in-gym.jpg"
              alt="Christophe training client"
              className="rounded-lg object-cover w-full h-[300px] shadow-lg"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src="/chris.jpg"
              alt="Christophe demonstrating exercise"
              className="rounded-lg object-cover w-full h-[300px] mt-8 shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
