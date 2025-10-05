"use client"

import Link from "next/link"
import { Facebook, Linkedin, Instagram, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-600">
          FORTUNE
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="nav-link text-sm uppercase tracking-widest hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="nav-link text-sm uppercase tracking-widest hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/services" className="nav-link text-sm uppercase tracking-widest hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link
            href="/products"
            className="nav-link text-sm uppercase tracking-widest hover:text-blue-600 transition-colors"
          >
            Products
          </Link>
          <Link href="/contact" className="nav-link text-sm uppercase tracking-widest hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>

        {/* Desktop Social Media Icons */}
        <div className="hidden md:flex space-x-4">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? "max-h-96 opacity-100" 
          : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/products" 
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/contact" 
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Social Media Icons */}
              <div className="flex space-x-6 pt-4">
                <a href="#" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}