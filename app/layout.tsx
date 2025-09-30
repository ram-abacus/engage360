import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Engage360 - Reward Smarter. Authenticate Products. Engage Customers.",
  description:
    "A single smart platform for brands: real-time inventory tracking, product authenticity checks, and instant UPI rewards to build lasting customer loyalty — no app required.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
