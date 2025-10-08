"use client"

import { useState } from "react"
import { Header } from "@/components/salon/Header"
import { Hero } from "@/components/salon/Hero"
import { Services } from "@/components/salon/Services"
import { Hours } from "@/components/salon/Hours"
import { Gallery } from "@/components/salon/Gallery"
import { Footer } from "@/components/salon/Footer"
import { Chatbot } from "@/components/salon/Chatbot"

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Header onOpenChat={() => setChatOpen(true)} />
      <main>
        <Hero onOpenChat={() => setChatOpen(true)} />
        <Services />
        <Hours />
        <Gallery />
      </main>
      <Footer />
      <Chatbot open={chatOpen} onOpenChange={setChatOpen} />
    </div>
  )
}

