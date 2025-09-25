import type React from "react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full px-4 py-6 md:px-6 lg:px-8 flex items-center justify-between border-b border-border">
      <Link href="#" className="text-2xl font-serif font-bold text-foreground" prefetch={undefined}>
        PeakFrame
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link
          href="#about"
          className="text-muted-foreground hover:text-foreground transition-colors"
          prefetch={undefined}
        >
          About
        </Link>
        <Link
          href="#portfolio"
          className="text-muted-foreground hover:text-foreground transition-colors"
          prefetch={undefined}
        >
          Portfolio
        </Link>
        <Link
          href="#packages"
          className="text-muted-foreground hover:text-foreground transition-colors"
          prefetch={undefined}
        >
          Packages
        </Link>
        <Link
          href="#contact"
          className="text-muted-foreground hover:text-foreground transition-colors"
          prefetch={undefined}
        >
          Inquire
        </Link>
      </nav>
      <button className="md:hidden">
        <MenuIcon className="h-6 w-6 text-foreground" />
        <span className="sr-only">Toggle navigation</span>
      </button>
    </header>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
