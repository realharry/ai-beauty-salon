import { Card } from "@/components/ui/card"

export function Gallery() {
  const images = [
    { title: "Luxury Salon Interior", color: "from-pink-200 to-rose-200" },
    { title: "Professional Hair Styling", color: "from-purple-200 to-pink-200" },
    { title: "Relaxing Spa Area", color: "from-blue-200 to-cyan-200" },
    { title: "Manicure Station", color: "from-amber-200 to-orange-200" },
    { title: "Premium Beauty Products", color: "from-rose-200 to-pink-200" },
    { title: "Modern Treatment Rooms", color: "from-indigo-200 to-purple-200" },
  ]

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Salon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into our modern, elegant space designed for your comfort and relaxation
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className={`aspect-video bg-gradient-to-br ${image.color} dark:opacity-70 relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2 p-6">
                    <div className="text-4xl">📸</div>
                    <p className="font-semibold text-gray-700 dark:text-gray-900">
                      {image.title}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Visit us to experience our beautiful salon in person
          </p>
        </div>
      </div>
    </section>
  )
}
