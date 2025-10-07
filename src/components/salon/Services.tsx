import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, Hand, Sparkles, Heart, Waves, Palette } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Hair Services",
    description: "Expert cuts, styling, coloring, and treatments",
    services: [
      { name: "Women's Cut & Style", price: "$65 - $95" },
      { name: "Men's Cut", price: "$35 - $45" },
      { name: "Hair Coloring", price: "$120 - $250" },
      { name: "Highlights", price: "$150 - $300" },
      { name: "Deep Conditioning Treatment", price: "$45" },
    ]
  },
  {
    icon: Hand,
    title: "Nail Services",
    description: "Manicures, pedicures, and nail art",
    services: [
      { name: "Classic Manicure", price: "$35" },
      { name: "Gel Manicure", price: "$50" },
      { name: "Spa Pedicure", price: "$65" },
      { name: "Deluxe Pedicure", price: "$85" },
      { name: "Nail Art (per nail)", price: "$5 - $15" },
    ]
  },
  {
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Rejuvenating facials for glowing skin",
    services: [
      { name: "Classic Facial", price: "$85" },
      { name: "Anti-Aging Facial", price: "$125" },
      { name: "Deep Cleansing Facial", price: "$95" },
      { name: "Hydrating Facial", price: "$105" },
      { name: "Microdermabrasion", price: "$140" },
    ]
  },
  {
    icon: Heart,
    title: "Massage Therapy",
    description: "Relaxing and therapeutic massages",
    services: [
      { name: "Swedish Massage (60 min)", price: "$95" },
      { name: "Deep Tissue Massage (60 min)", price: "$110" },
      { name: "Hot Stone Massage (75 min)", price: "$140" },
      { name: "Aromatherapy Massage (60 min)", price: "$105" },
      { name: "Couples Massage (60 min)", price: "$190" },
    ]
  },
  {
    icon: Waves,
    title: "Waxing Services",
    description: "Professional hair removal services",
    services: [
      { name: "Eyebrow Waxing", price: "$20" },
      { name: "Upper Lip", price: "$15" },
      { name: "Full Face", price: "$50" },
      { name: "Half Leg", price: "$45" },
      { name: "Full Leg", price: "$75" },
    ]
  },
  {
    icon: Palette,
    title: "Makeup Services",
    description: "Professional makeup application",
    services: [
      { name: "Special Event Makeup", price: "$85" },
      { name: "Bridal Makeup", price: "$150" },
      { name: "Makeup Lesson", price: "$95" },
      { name: "Lash Extensions", price: "$120 - $200" },
      { name: "Lash Lift & Tint", price: "$85" },
    ]
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Indulge in our comprehensive range of beauty and wellness services, tailored to enhance your natural beauty
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex justify-between text-sm">
                        <span className="text-foreground">{item.name}</span>
                        <span className="font-medium text-primary">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
