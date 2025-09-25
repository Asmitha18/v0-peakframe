import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function GallerySection() {
  const images = [
    { src: "/editorial-fashion-photography.jpg", alt: "Editorial Fashion" },
    { src: "/brand-product-photography.jpg", alt: "Brand Product" },
    { src: "/diverse-friends-city-cafe.png", alt: "Lifestyle" },
    { src: "/portrait-photography.png", alt: "Portrait" },
    { src: "/vibrant-pasta-dish.png", alt: "Food" },
    { src: "/modern-city-architecture.png", alt: "Architecture" },
  ]

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-8 px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Curated Galleries</h2>
          <p className="text-muted-foreground text-lg md:text-xl text-pretty">
            A selection of our recent work, showcasing our diverse portfolio in brand and editorial photography.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden rounded-lg">
              <CardContent className="p-0">
                <div className="relative h-[300px] w-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
