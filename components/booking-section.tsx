"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
    oneOnOne: false,
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Show success message
    toast({
      title: "Consultation Requested! 🎉",
      description: "Christophe will reach out to you within 24 hours.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      goal: "",
      oneOnOne: false,
    })
  }

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section id="booking" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Start Your Fitness Journey Today</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 w-20 bg-primary mx-auto mb-6"
            />
            <p className="text-lg text-secondary-foreground/80">
              {"Book your free consultation and let's discuss your goals"}
            </p>
          </motion.div>

          <motion.form
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-card p-8 rounded-lg shadow-xl"
          >
            <motion.div variants={fieldVariants} className="space-y-2">
              <Label htmlFor="name" className="text-card-foreground">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background text-foreground"
              />
            </motion.div>

            <motion.div variants={fieldVariants} className="space-y-2">
              <Label htmlFor="email" className="text-card-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background text-foreground"
              />
            </motion.div>

            <motion.div variants={fieldVariants} className="space-y-2">
              <Label htmlFor="goal" className="text-card-foreground">
                Fitness Goal
              </Label>
              <Textarea
                id="goal"
                placeholder="Tell me about your fitness goals..."
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                required
                rows={4}
                className="bg-background text-foreground"
              />
            </motion.div>

            <motion.div variants={fieldVariants} className="flex items-center space-x-2">
              <Checkbox
                id="oneOnOne"
                checked={formData.oneOnOne}
                onCheckedChange={(checked) => setFormData({ ...formData, oneOnOne: checked as boolean })}
              />
              <Label htmlFor="oneOnOne" className="text-sm cursor-pointer text-card-foreground">
                I want 1-on-1 coaching
              </Label>
            </motion.div>

            <motion.div variants={fieldVariants}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Book My Free Call
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
