import Link from "next/link"
import { Facebook, Linkedin, Instagram } from "lucide-react"

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage }: NavigationProps) {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/video-library", label: "Video Library" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-600">
          FORTUNE
        </Link>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm uppercase tracking-widest transition-colors ${
                currentPage === item.label.toLowerCase().replace(" ", "-") ? "text-blue-600" : "hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </nav>
  )
}
