"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@fortunebusiness.com", "support@fortunebusiness.com"],
    description: "Get in touch via email for general inquiries and support.",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
    description: "Speak directly with our team during business hours.",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Business Avenue", "New York, NY 10001"],
    description: "Schedule a meeting at our modern office space.",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    description: "We're available during these hours for consultations.",
  },
]

const offices = [
  {
    city: "New York",
    address: "123 Business Avenue, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "ny@fortunebusiness.com",
  },
  {
    city: "San Francisco",
    address: "456 Innovation Street, San Francisco, CA 94105",
    phone: "+1 (555) 987-6543",
    email: "sf@fortunebusiness.com",
  },
  {
    city: "Chicago",
    address: "789 Commerce Drive, Chicago, IL 60601",
    phone: "+1 (555) 456-7890",
    email: "chicago@fortunebusiness.com",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-600">
            FORTUNE
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm uppercase tracking-widest hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm uppercase tracking-widest hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-sm uppercase tracking-widest hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link
              href="/video-library"
              className="text-sm uppercase tracking-widest hover:text-blue-600 transition-colors"
            >
              Video Library
            </Link>
            <Link href="/contact" className="text-sm uppercase tracking-widest text-blue-600">
              Contact
            </Link>
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

      {/* Header Section */}
      <section className="pt-32 pb-12 px-4 md:px-8 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">CONTACT US</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Ready to transform your business? Get in touch with our team to discuss your project and goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <h2 className="text-4xl font-bold tracking-tighter mb-6">START YOUR PROJECT</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours to discuss your project requirements
                and how we can help achieve your goals.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 p-8 text-center">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="digital-strategy">Digital Strategy</option>
                        <option value="web-development">Web Development</option>
                        <option value="business-consulting">Business Consulting</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="cloud-solutions">Cloud Solutions</option>
                        <option value="support-maintenance">Support & Maintenance</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors resize-vertical"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-8 hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2 font-semibold uppercase tracking-widest"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <h2 className="text-4xl font-bold tracking-tighter mb-6">GET IN TOUCH</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our services or want to discuss your project? We're here to help and would love to
                hear from you.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-blue-600 font-semibold">
                          {detail}
                        </p>
                      ))}
                      <p className="text-gray-600 text-sm mt-2">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="text-white" size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="text-white" size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Instagram className="text-white" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">OUR OFFICES</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our locations or schedule a virtual consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white p-8 border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-600">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-gray-400 flex-shrink-0" size={16} />
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-gray-400 flex-shrink-0" size={16} />
                    <p className="text-blue-600 font-semibold">{office.email}</p>
                  </div>
                </div>
                <button className="w-full mt-6 border-2 border-blue-600 text-blue-600 py-3 px-6 hover:bg-blue-600 hover:text-white transition-colors duration-300 font-semibold uppercase tracking-widest">
                  Schedule Visit
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">FREQUENTLY ASKED</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 p-6 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-3">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary based on scope and complexity. Most projects range from 4-16 weeks, with smaller
                consulting engagements taking 2-6 weeks and larger development projects taking 8-20 weeks.
              </p>
            </div>

            <div className="border border-gray-200 p-6 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-3">Do you work with small businesses?</h3>
              <p className="text-gray-600">
                We work with businesses of all sizes, from startups to enterprise companies. Our solutions are scalable
                and tailored to fit your specific needs and budget.
              </p>
            </div>

            <div className="border border-gray-200 p-6 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-3">What's included in your support services?</h3>
              <p className="text-gray-600">
                Our support services include 24/7 monitoring, regular updates, performance optimization, security
                audits, and technical support. We offer different tiers to match your specific requirements.
              </p>
            </div>

            <div className="border border-gray-200 p-6 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-3">Can you help with existing systems?</h3>
              <p className="text-gray-600">
                Yes, we can audit, optimize, and enhance existing systems. Whether you need improvements, integrations,
                or complete modernization, we'll assess your current setup and recommend the best path forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </main>
  )
}
