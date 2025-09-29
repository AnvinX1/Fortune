import Link from "next/link"
import { Facebook, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 bg-blue-600 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">FORTUNE</h3>
            <p className="text-blue-100">
              Smart solutions for smart business. Transforming companies through innovative digital strategies.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-blue-100">Digital Strategy</span>
              </li>
              <li>
                <span className="text-blue-100">Web Development</span>
              </li>
              <li>
                <span className="text-blue-100">Business Consulting</span>
              </li>
              <li>
                <span className="text-blue-100">Data Analytics</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest">Contact Info</h4>
            <div className="space-y-2 text-blue-100">
              <p>hello@fortunebusiness.com</p>
              <p>+1 (555) 123-4567</p>
              <p>New York, NY</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <Facebook size={20} className="hover:text-white cursor-pointer transition-colors" />
              <Linkedin size={20} className="hover:text-white cursor-pointer transition-colors" />
              <Instagram size={20} className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="border-t border-blue-500 pt-8 text-center">
          <p className="text-blue-100">© 2025 Fortune Business Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
