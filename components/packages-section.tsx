import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { LucideCheckCircle as LucideCheckIcon } from "lucide-react"

export default function PackagesSection() {
  const packages = [
    {
      name: "Half-Day Session",
      price: "Starting at $1500",
      description: "Ideal for focused brand content or concise editorial features.",
      features: ["4 hours of shooting", "1-2 locations", "20-30 retouched images", "Online proofing gallery"],
    },
    {
      name: "Full-Day Session",
      price: "Starting at $2800",
      description: "Comprehensive coverage for extensive brand campaigns or multi-look editorials.",
      features: [
        "8 hours of shooting",
        "Up to 3 locations",
        "40-60 retouched images",
        "Online proofing gallery",
        "Basic usage rights",
      ],
    },
    {
      name: "Custom Project",
      price: "Inquire for Quote",
      description: "Tailored solutions for unique creative visions and large-scale productions.",
      features: [
        "Flexible shooting duration",
        "Multiple locations",
        "Custom image count",
        "Advanced usage rights",
        "Dedicated project management",
      ],
    },
  ]

  return (
    <section id="packages" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container space-y-8 px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Photography Packages</h2>
          <p className="text-muted-foreground text-lg md:text-xl text-pretty">
            Transparent pricing for our brand and editorial photography services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">{pkg.name}</CardTitle>
                <CardDescription className="text-lg font-bold text-primary">{pkg.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground text-pretty">{pkg.description}</p>
                <ul className="space-y-2 text-sm text-foreground">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <LucideCheckIcon className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
