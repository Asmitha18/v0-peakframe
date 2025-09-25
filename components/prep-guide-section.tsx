import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DownloadIcon } from "lucide-react"

export default function PrepGuideSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container space-y-8 px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Your Prep Guide</h2>
        <p className="text-muted-foreground text-lg md:text-xl text-pretty max-w-2xl mx-auto">
          Download our comprehensive prep guide to ensure a smooth and successful photoshoot. This guide covers
          everything you need to know before your session, clarifying expectations and helping you prepare.
        </p>
        <div className="flex justify-center">
          <Link href="/peakframe-prep-guide.pdf" target="_blank" rel="noopener noreferrer" passHref>
            <Button className="px-8 py-3 text-lg flex items-center gap-2">
              <DownloadIcon className="h-5 w-5" />
              Download Prep Guide
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
