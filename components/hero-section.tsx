import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      <Image src="/elegant-photography-studio.jpg" alt="Hero Image" fill className="object-cover object-center" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent flex items-end justify-center p-8 text-center">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground text-balance">
            Capturing Moments, Crafting Narratives
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            Brand and editorial photography that tells your unique story with elegance and precision.
          </p>
        </div>
      </div>
    </section>
  )
}
