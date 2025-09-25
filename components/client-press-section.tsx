import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function ClientPressSection() {
  const clients = [
    {
      name: "Acme Corp",
      logo: "/acme-corp-logo.png",
      testimonial:
        "PeakFrame captured the essence of our brand perfectly. Their professionalism and artistic vision are unmatched.",
    },
    {
      name: "Global Innovations",
      logo: "/global-innovations-logo.jpg",
      testimonial:
        "The team at PeakFrame delivered stunning visuals that significantly elevated our marketing campaigns. Highly recommended!",
    },
    {
      name: "FutureTech Solutions",
      logo: "/futuretech-solutions-logo.jpg",
      testimonial:
        "Working with PeakFrame was a fantastic experience. They understood our needs and exceeded our expectations with their creative approach.",
    },
  ]

  const press = [
    {
      title: "Featured in Photography Today",
      description:
        'Our recent editorial shoot for "Urban Landscapes" was highlighted for its innovative use of light and composition.',
      link: "#",
    },
    {
      title: 'Awarded "Best Commercial Photographer"',
      description: "PeakFrame recognized for excellence in commercial photography at the annual industry awards.",
      link: "#",
    },
    {
      title: "Interview with Creative Arts Magazine",
      description:
        "Our lead photographer shares insights into their creative process and the future of visual storytelling.",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container space-y-8 px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Clients & Press</h2>
          <p className="text-muted-foreground text-lg md:text-xl text-pretty">
            {"Trusted by leading brands and recognized by industry publications."}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6">
              <Avatar className="h-16 w-16 mb-4">
                <AvatarImage src={client.logo || "/placeholder.svg"} alt={client.name} />
                <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardContent>
                <p className="text-muted-foreground text-sm italic text-pretty">{`"${client.testimonial}"`}</p>
                <p className="mt-4 font-semibold text-foreground">{client.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {press.map((item, index) => (
            <Card key={index} className="p-6">
              <CardContent className="space-y-2">
                <h3 className="text-xl font-serif font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{item.description}</p>
                <Link href={item.link} className="text-primary hover:underline" prefetch={undefined}>
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
