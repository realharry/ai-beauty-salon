"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface HeaderProps {
  onOpenChat: () => void
}

export function Header({ onOpenChat }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Glamour Haven
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("hours")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Hours
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={onOpenChat}
            variant="default"
            className="gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Chat with Us</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
