"use client"

import Link from "next/link"

interface CTASectionProps {
  title: string
  subtitle: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    onClick?: () => void
  }
  className?: string
}

export default function CTASection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  className = "",
}: CTASectionProps) {
  return (
    <section className={`py-20 px-4 md:px-8 bg-blue-600 text-white ${className}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButton.href}
            className="bg-white text-blue-600 px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors duration-300"
          >
            {primaryButton.text}
          </Link>
          {secondaryButton && (
            <button
              onClick={secondaryButton.onClick}
              className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              {secondaryButton.text}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
