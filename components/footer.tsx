import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full px-4 py-6 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between border-t border-border text-muted-foreground text-sm">
      <p className="text-center md:text-left mb-4 md:mb-0">{"© 2025 PeakFrame. All rights reserved."}</p>
      <nav className="flex gap-4">
        <Link href="#" className="hover:text-foreground transition-colors" prefetch={undefined}>
          Privacy Policy
        </Link>
        <Link href="#" className="hover:text-foreground transition-colors" prefetch={undefined}>
          Terms of Service
        </Link>
      </nav>
    </footer>
  )
}
