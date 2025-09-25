import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Playfair_Display } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "PeakFrame - Photography Portfolio",
  description: "Elegant and restrained brand and editorial photography portfolio.",
  generator: "v0.app",
}

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${playfairDisplay.variable} antialiased`}>
      <body>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
