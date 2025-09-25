import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LightbulbIcon, CameraIcon, ImageUpIcon, CheckCircleIcon } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: LightbulbIcon,
      title: "Discovery & Planning",
      description:
        "We begin with a detailed consultation to understand your vision, goals, and specific project requirements. This includes discussing concepts, locations, and logistics.",
    },
    {
      icon: CameraIcon,
      title: "The Photoshoot",
      description:
        "Our team executes the photoshoot with precision and creativity, ensuring every shot aligns with the agreed-upon vision. We focus on capturing authentic moments and compelling narratives.",
    },
    {
      icon: ImageUpIcon,
      title: "Post-Production & Curation",
      description:
        "After the shoot, we meticulously select and professionally retouch the best images. Our curation process ensures a cohesive and high-quality final gallery.",
    },
    {
      icon: CheckCircleIcon,
      title: "Delivery & Feedback",
      description:
        "Your final images are delivered through a secure online gallery. We welcome your feedback and offer revision rounds to ensure your complete satisfaction.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container space-y-8 px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">How a Shoot Works</h2>
          <p className="text-muted-foreground text-lg md:text-xl text-pretty">
            Our streamlined process ensures a seamless and enjoyable experience from concept to delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <step.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl font-serif">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm text-pretty">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
