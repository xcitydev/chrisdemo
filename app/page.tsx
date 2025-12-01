import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CoachingPrograms } from "@/components/coaching-programs"
import { TransformationsSection } from "@/components/transformations-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CoachingPrograms />
      <TransformationsSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </main>
  )
}
