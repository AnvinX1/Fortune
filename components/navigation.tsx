"use client"

import Link from "next/link"
import { Instagram, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <nav 
        className={`backdrop-blur-md rounded-full px-4 py-2 md:px-6 md:py-3 transition-all duration-300 border ${
          isScrolled ? 'bg-white/95 border-blue-300/60 shadow-2xl' : 'bg-white/80 border-blue-200/40 shadow-xl'
        }`}
      >
        <div className="flex items-center space-x-4 md:space-x-8">
          <Link href="/" className="flex items-center">
            <img 
              src="/fortunelgoo.png" 
              alt="Fortune Logo" 
              className="h-6 md:h-8 w-auto object-contain transform scale-125 md:scale-150 origin-left hover:scale-150 md:hover:scale-175 transition-transform duration-300"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <Link href="/" aria-current={pathname === '/' ? 'page' : undefined} className={`nav-link px-3 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded-full font-medium ${pathname === '/' ? 'text-blue-700 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}>
              Home
            </Link>
            <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined} className={`nav-link px-3 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded-full font-medium ${pathname === '/about' ? 'text-blue-700 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}>
              About
            </Link>
            <Link href="/services" aria-current={pathname === '/services' ? 'page' : undefined} className={`nav-link px-3 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded-full font-medium ${pathname === '/services' ? 'text-blue-700 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}>
              Services
            </Link>
            <Link href="/products" aria-current={pathname === '/products' ? 'page' : undefined} className={`nav-link px-3 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded-full font-medium ${pathname === '/products' ? 'text-blue-700 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}>
              Products
            </Link>
            <Link href="/social-media" aria-current={pathname === '/social-media' ? 'page' : undefined} className={`nav-link px-3 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded-full font-medium ${pathname === '/social-media' ? 'text-blue-700 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}>
              Social
            </Link>
            <Link href="/contact" aria-current={pathname === '/contact' ? 'page' : undefined} className={`nav-link px-3 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded-full font-medium ${pathname === '/contact' ? 'text-blue-700 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}>
              Contact
            </Link>
          </div>

          {/* Desktop Social Media Icons */}
          <div className="hidden md:flex items-center space-x-2">
            <a href="https://www.instagram.com/fortune_oman?igsh=MWc1bng1aXQ1cTZ6YQ==" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-300 rounded-full hover:scale-110">
              <Instagram size={16} />
            </a>
            <Link href="/contact" className="hidden lg:inline-flex bg-blue-600 text-white px-4 py-2 text-xs uppercase tracking-widest rounded-full hover:bg-blue-700 transition-colors font-semibold shadow-md hover:shadow-lg">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-full bg-white/50 flex items-center justify-center w-10 h-10"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out fixed top-16 left-1/2 transform -translate-x-1/2 z-40 w-auto ${
        isMobileMenuOpen
          ? "max-h-96 opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
      }`}
      >
        <div className="bg-white/95 backdrop-blur-md border border-blue-200/50 rounded-3xl shadow-2xl px-4 py-3 min-w-[280px]">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className={`text-sm font-medium transition-all duration-300 py-3 px-4 hover:bg-blue-50 rounded-2xl flex items-center justify-center ${pathname === '/' ? 'text-blue-700 bg-blue-50' : 'text-gray-900 hover:text-blue-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-all duration-300 py-3 px-4 hover:bg-blue-50 rounded-2xl flex items-center justify-center ${pathname === '/about' ? 'text-blue-700 bg-blue-50' : 'text-gray-900 hover:text-blue-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium transition-all duration-300 py-3 px-4 hover:bg-blue-50 rounded-2xl flex items-center justify-center ${pathname === '/services' ? 'text-blue-700 bg-blue-50' : 'text-gray-900 hover:text-blue-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/products"
              className={`text-sm font-medium transition-all duration-300 py-3 px-4 hover:bg-blue-50 rounded-2xl flex items-center justify-center ${pathname === '/products' ? 'text-blue-700 bg-blue-50' : 'text-gray-900 hover:text-blue-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/social-media"
              className={`text-sm font-medium transition-all duration-300 py-3 px-4 hover:bg-blue-50 rounded-2xl flex items-center justify-center ${pathname === '/social-media' ? 'text-blue-700 bg-blue-50' : 'text-gray-900 hover:text-blue-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Social Media
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-all duration-300 py-3 px-4 hover:bg-blue-50 rounded-2xl flex items-center justify-center ${pathname === '/contact' ? 'text-blue-700 bg-blue-50' : 'text-gray-900 hover:text-blue-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Social Media + CTA */}
            <div className="flex items-center justify-center pt-2 pb-1 space-x-3">
              <a href="https://www.instagram.com/fortune_oman?igsh=MWc1bng1aXQ1cTZ6YQ==" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-300 rounded-full hover:scale-110">
                <Instagram size={20} />
              </a>
              <Link href="/contact" className="inline-flex bg-blue-600 text-white px-4 py-2 text-xs uppercase tracking-widest rounded-full hover:bg-blue-700 transition-colors font-semibold">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}