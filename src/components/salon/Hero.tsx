"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

interface HeroProps {
  onOpenChat: () => void
}

export function Hero({ onOpenChat }: HeroProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 dark:from-pink-950/20 dark:via-rose-950/20 dark:to-amber-950/20" />
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Premium Beauty & Wellness</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Discover Your Inner
              <span className="block bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Beauty & Radiance
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience luxury beauty services in the heart of San Diego. Our expert stylists and beauticians are dedicated to making you look and feel your absolute best.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={onOpenChat} className="gap-2">
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                const element = document.getElementById("services")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View Services
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t w-full max-w-2xl">
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Expert Stylists</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
