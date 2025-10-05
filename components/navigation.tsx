"use client"

import Link from "next/link"
import { Facebook, Linkedin, Instagram, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <nav 
        className="bg-white/90 backdrop-blur-md border border-blue-200/50 rounded-full shadow-xl px-4 py-2 md:px-6 md:py-3"
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
            <Link href="/" className="nav-link px-3 py-2 text-xs uppercase tracking-widest hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-full font-medium">
              Home
            </Link>
            <Link href="/about" className="nav-link px-3 py-2 text-xs uppercase tracking-widest hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-full font-medium">
              About
            </Link>
            <Link href="/services" className="nav-link px-3 py-2 text-xs uppercase tracking-widest hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-full font-medium">
              Services
            </Link>
            <Link
              href="/products"
              className="nav-link px-3 py-2 text-xs uppercase tracking-widest hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-full font-medium"
            >
              Products
            </Link>
            <Link href="/contact" className="nav-link px-3 py-2 text-xs uppercase tracking-widest hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-full font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop Social Media Icons */}
          <div className="hidden md:flex space-x-1">
            <a href="#" className="p-2 text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-300 rounded-full hover:scale-110">
              <Facebook size={16} />
            </a>
            <a href="#" className="p-2 text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-300 rounded-full hover:scale-110">
              <Linkedin size={16} />
            </a>
            <a href="#" className="p-2 text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-300 rounded-full hover:scale-110">
              <Instagram size={16} />
            </a>
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
              className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-all duration-300 py-3 px-4 hover:bg-blue-50 rounded-2xl flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-all duration-300 py-3 px-4 hover:bg-blue-50 rounded-2xl flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-all duration-300 py-3 px-4 hover:bg-blue-50 rounded-2xl flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-all duration-300 py-3 px-4 hover:bg-blue-50 rounded-2xl flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-all duration-300 py-3 px-4 hover:bg-blue-50 rounded-2xl flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Social Media Icons */}
            <div className="flex space-x-4 pt-2 pb-1 justify-center">
              <a href="#" className="p-3 text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-300 rounded-full hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-300 rounded-full hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-300 rounded-full hover:scale-110">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}