import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-secondary/20">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Glamour Haven
            </h3>
            <p className="text-sm text-muted-foreground">
              Your premier destination for beauty and wellness in San Diego. We&apos;re dedicated to bringing out your natural radiance.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:text-primary transition-colors">
                  Hours & Location
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Fashion Avenue</li>
              <li>San Diego, CA 92101</li>
              <li>(619) 555-GLAM</li>
              <li>info@glamourhaven.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> in San Diego © 2025 Glamour Haven
          </p>
        </div>
      </div>
    </footer>
  )
}
