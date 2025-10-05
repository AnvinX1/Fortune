import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fortune Gifts Oman - Premium Promotional Gifts & Corporate Gifting",
  description:
    "Oman's premier promotional gifts company. Premium gifts, eco-friendly products, and technology accessories for corporate events, client appreciation, and team recognition across the Sultanate and Gulf region.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
