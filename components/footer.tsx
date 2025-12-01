"use client"

import { Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
            <a
              href="https://instagram.com/christophe_cfitness"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>

          <Button
            variant="outline"
            size="lg"
            className="border-background text-background hover:bg-background hover:text-foreground bg-transparent"
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
          >
            Message Me on WhatsApp
          </Button>

          <div className="text-center space-y-2">
            <p className="font-semibold">@christophe_cfitness</p>
            <p className="text-sm text-background/70">Powered by Booltspace</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
