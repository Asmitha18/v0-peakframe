import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">About PeakFrame</h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            PeakFrame specializes in creating compelling visual narratives for brands and editorial publications. With a
            keen eye for detail and a passion for storytelling, we transform concepts into captivating imagery that
            resonates with your audience. Our approach is elegant and restrained, ensuring that every photograph speaks
            volumes while maintaining a timeless aesthetic.
          </p>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Based in [Your Location], we offer on-location and studio photography services, catering to a diverse range
            of clients seeking high-quality, impactful visuals.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image src="/photographer-working-in-studio.jpg" alt="About Image" fill className="object-cover object-center" />
        </div>
      </div>
    </section>
  )
}
