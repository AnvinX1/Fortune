"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import OfficeMap from "@/components/office-map"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@fortunegifts.om", "orders@fortunegifts.om", "support@fortunegifts.om", "sales@fortunegifts.om"],
    description: "Get in touch via email for product inquiries, order support, and general questions. We respond within 24 hours.",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+968 2450 1234 (Main)", "+968 2450 1235 (Sales)", "+968 2450 1236 (Support)", "WhatsApp: +968 9123 4567"],
    description: "Speak directly with our team during business hours for immediate assistance and personalized service.",
  },
  {
    icon: MapPin,
    title: "Visit Our Showroom",
    details: ["Al Khuwair Commercial Complex", "Building 123, Suite 456", "Muscat, Sultanate of Oman", "Postal Code: 112"],
    description: "Schedule a meeting at our main showroom to see our products in person and discuss your requirements.",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Sunday - Thursday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Friday: Closed", "Emergency Support: 24/7"],
    description: "We're available during these hours for consultations, order support, and showroom visits.",
  },
]

const companyDetails = {
  name: "Fortune Gifts Oman",
  legalName: "Fortune Gifts & Promotional Products LLC",
  registration: "CR No: 1234567890",
  taxNumber: "TRN: 100123456789012",
  founded: "2015",
  employees: "25-50",
  website: "www.fortunegifts.om",
  socialMedia: {
    linkedin: "linkedin.com/company/fortune-gifts-oman",
    facebook: "facebook.com/FortuneGiftsOman",
    instagram: "instagram.com/fortunegiftsoman"
  }
}

const offices = [
  {
    city: "Muscat (Head Office)",
    address: "Al Khuwair Commercial Complex, Building 123, Suite 456, Muscat, Sultanate of Oman",
    postalCode: "Postal Code: 112",
    phone: "+968 2450 1234",
    mobile: "+968 9123 4567",
    email: "muscat@fortunegifts.om",
    manager: "Ahmed Al-Rashid",
    services: ["Full Showroom", "Custom Design", "Bulk Orders", "Express Delivery"],
    hours: "Sun-Thu: 8AM-6PM, Sat: 9AM-2PM"
  },
  {
    city: "Salalah Branch",
    address: "Al Dahariz Commercial Area, Block A, Office 201, Salalah, Sultanate of Oman",
    postalCode: "Postal Code: 211",
    phone: "+968 2329 5678",
    mobile: "+968 9123 5678",
    email: "salalah@fortunegifts.om",
    manager: "Fatima Al-Zahra",
    services: ["Product Display", "Consultation", "Regional Delivery", "Local Support"],
    hours: "Sun-Thu: 9AM-5PM, Sat: 10AM-1PM"
  },
  {
    city: "Sohar Industrial",
    address: "Sohar Industrial Port Area, Warehouse Complex 15, Sohar, Sultanate of Oman",
    postalCode: "Postal Code: 311",
    phone: "+968 2684 9012",
    mobile: "+968 9123 9012",
    email: "sohar@fortunegifts.om",
    manager: "Omar Al-Balushi",
    services: ["Bulk Storage", "Industrial Orders", "Logistics Hub", "Manufacturing Support"],
    hours: "Sun-Thu: 7AM-5PM, Sat: 8AM-12PM"
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    industry: "",
    address: "",
    city: "",
    country: "",
    service: "",
    budget: "",
    quantity: "",
    timeline: "",
    occasion: "",
    message: "",
    preferredContact: "email",
    newsletter: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        position: "",
        industry: "",
        address: "",
        city: "",
        country: "",
        service: "",
        budget: "",
        quantity: "",
        timeline: "",
        occasion: "",
        message: "",
        preferredContact: "email",
        newsletter: false,
      })
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-white">

      {/* Enhanced Header Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 bg-gradient-to-br from-slate-600 via-gray-700 to-zinc-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full hidden md:block"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white rounded-full hidden md:block"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full hidden md:block"></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 border-2 border-white rounded-full hidden md:block"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-2 text-xs md:text-sm font-semibold uppercase tracking-widest mb-4 md:mb-6">
            Get In Touch
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight md:tracking-tighter mb-6 md:mb-8 leading-tight">
            <span className="block break-words">LET'S CREATE</span>
            <span className="block text-blue-200">SOMETHING</span>
            <span className="block">AMAZING</span>
          </h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 text-blue-100 leading-relaxed px-2 md:px-0">
            Ready to find the perfect gifts? Get in touch with our team to discuss your gifting needs, 
            get custom quotes, and discover how we can help strengthen your relationships.
          </p>
          
          {/* Contact Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">24hr</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">100%</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">Free Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">3</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">Showrooms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">5000+</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form & Info */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest mb-6">
                Start Your Order
              </div>
              <h2 className="text-4xl font-bold tracking-tighter mb-6">GET YOUR QUOTE</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours to discuss your gifting requirements
                and how we can help you find the perfect products.
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
                  {/* Personal Information */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-4 text-gray-800">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-3">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-3">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                          placeholder="+968 9123 4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-4 text-gray-800">Company Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                          placeholder="Your Company Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-3">
                          Position/Title
                        </label>
                        <input
                          type="text"
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                          placeholder="Marketing Manager"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-3">
                          Industry
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                        >
                          <option value="">Select Industry</option>
                          <option value="technology">Technology</option>
                          <option value="finance">Finance & Banking</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="education">Education</option>
                          <option value="retail">Retail & E-commerce</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="government">Government</option>
                          <option value="nonprofit">Non-profit</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-3">
                          Country *
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                        >
                          <option value="">Select Country</option>
                          <option value="oman">Oman</option>
                          <option value="uae">United Arab Emirates</option>
                          <option value="saudi">Saudi Arabia</option>
                          <option value="qatar">Qatar</option>
                          <option value="kuwait">Kuwait</option>
                          <option value="bahrain">Bahrain</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-6">
                      <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-3">
                        Company Address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300 resize-vertical"
                        placeholder="Enter your company address..."
                      />
                    </div>
                  </div>

                  {/* Project Requirements */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-4 text-gray-800">Project Requirements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-3">
                          Product Category Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                        >
                          <option value="">Select a category</option>
                          <option value="technology-gifts">Technology Gifts</option>
                          <option value="eco-friendly-products">Eco-Friendly Products</option>
                          <option value="audio-speakers">Audio & Speakers</option>
                          <option value="office-business">Office & Business</option>
                          <option value="drinkware-dining">Drinkware & Dining</option>
                          <option value="bags-accessories">Bags & Accessories</option>
                          <option value="custom-solution">Custom Solution</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="occasion" className="block text-sm font-semibold text-gray-700 mb-3">
                          Occasion/Purpose
                        </label>
                        <select
                          id="occasion"
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                        >
                          <option value="">Select occasion</option>
                          <option value="corporate-event">Corporate Event</option>
                          <option value="client-appreciation">Client Appreciation</option>
                          <option value="employee-recognition">Employee Recognition</option>
                          <option value="trade-show">Trade Show</option>
                          <option value="holiday-gifts">Holiday Gifts</option>
                          <option value="product-launch">Product Launch</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-3">
                          Quantity *
                        </label>
                        <select
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                        >
                          <option value="">Select quantity</option>
                          <option value="1-50">1 - 50 pieces</option>
                          <option value="51-100">51 - 100 pieces</option>
                          <option value="101-500">101 - 500 pieces</option>
                          <option value="501-1000">501 - 1,000 pieces</option>
                          <option value="1001-5000">1,001 - 5,000 pieces</option>
                          <option value="5000+">5,000+ pieces</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-3">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-500">Under $500</option>
                          <option value="500-1k">$500 - $1,000</option>
                          <option value="1k-5k">$1,000 - $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="over-50k">Over $50,000</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-3">
                          Delivery Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP (Rush Order)</option>
                          <option value="1-week">Within 1 week</option>
                          <option value="2-weeks">Within 2 weeks</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="2-months">Within 2 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-6">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                        Detailed Requirements *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300 resize-vertical"
                        placeholder="Please provide detailed information about your requirements: specific products, customization needs (logos, colors, text), packaging preferences, delivery address, any special instructions, and any other relevant details..."
                      />
                    </div>
                  </div>

                  {/* Communication Preferences */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-4 text-gray-800">Communication Preferences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="preferredContact" className="block text-sm font-semibold text-gray-700 mb-3">
                          Preferred Contact Method
                        </label>
                        <select
                          id="preferredContact"
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                        >
                          <option value="email">Email</option>
                          <option value="phone">Phone Call</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="any">Any Method</option>
                        </select>
                      </div>
                      <div className="flex items-center space-x-4">
                        <input
                          type="checkbox"
                          id="newsletter"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="newsletter" className="text-sm font-semibold text-gray-700">
                          Subscribe to our newsletter for product updates and special offers
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-8 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 font-bold uppercase tracking-widest rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Enhanced Contact Information */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest mb-6">
                Contact Info
              </div>
              <h2 className="text-4xl font-bold tracking-tighter mb-6">GET IN TOUCH</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our products or want to discuss your gifting needs? We're here to help and would love to
                hear from you.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-3">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-blue-600 font-semibold mb-1">
                          {detail}
                        </p>
                      ))}
                      <p className="text-gray-600 text-sm mt-2">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Social Media */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-xl mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">COMPANY DETAILS</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete information about Fortune Gifts Oman - your trusted partner for premium promotional products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Company Information */}
            <div className="bg-gray-50 p-10 rounded-2xl">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest mb-6">
                Company Information
              </div>
              <h3 className="text-3xl font-bold tracking-tighter mb-8">ABOUT FORTUNE GIFTS</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-bold text-lg mb-2">Company Name</h4>
                  <p className="text-gray-700">{companyDetails.name}</p>
                  <p className="text-gray-600 text-sm">{companyDetails.legalName}</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-bold text-lg mb-2">Legal Registration</h4>
                  <p className="text-gray-700">{companyDetails.registration}</p>
                  <p className="text-gray-700">{companyDetails.taxNumber}</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-bold text-lg mb-2">Company Profile</h4>
                  <div className="grid grid-cols-2 gap-4 text-gray-700">
                    <div>
                      <span className="font-semibold">Founded:</span> {companyDetails.founded}
                    </div>
                    <div>
                      <span className="font-semibold">Employees:</span> {companyDetails.employees}
                    </div>
                    <div>
                      <span className="font-semibold">Website:</span> {companyDetails.website}
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-bold text-lg mb-2">Social Media</h4>
                  <div className="space-y-2 text-gray-700">
                    <div><span className="font-semibold">LinkedIn:</span> {companyDetails.socialMedia.linkedin}</div>
                    <div><span className="font-semibold">Facebook:</span> {companyDetails.socialMedia.facebook}</div>
                    <div><span className="font-semibold">Instagram:</span> {companyDetails.socialMedia.instagram}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Credentials */}
            <div className="bg-gray-50 p-10 rounded-2xl">
              <div className="inline-block bg-green-100 text-green-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest mb-6">
                Business Credentials
              </div>
              <h3 className="text-3xl font-bold tracking-tighter mb-8">CERTIFICATIONS & AWARDS</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-lg mb-3 text-green-700">ISO Certifications</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• ISO 9001:2015 - Quality Management System</li>
                    <li>• ISO 14001:2015 - Environmental Management</li>
                    <li>• ISO 45001:2018 - Occupational Health & Safety</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-lg mb-3 text-blue-700">Industry Memberships</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Oman Chamber of Commerce & Industry</li>
                    <li>• Gulf Promotional Products Association</li>
                    <li>• International Association of Promotional Products</li>
                    <li>• Oman Export Development Center</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-lg mb-3 text-purple-700">Awards & Recognition</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Best Promotional Products Company 2023</li>
                    <li>• Excellence in Customer Service Award</li>
                    <li>• Sustainable Business Practices Recognition</li>
                    <li>• Top 100 SME in Oman 2022</li>
                  </ul>
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
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">OUR SHOWROOMS</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our showrooms or schedule a virtual consultation to see our products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white p-8 border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-600">{office.city}</h3>
                  <p className="text-sm text-gray-500 font-semibold">Branch Manager: {office.manager}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-gray-800 font-medium">{office.address}</p>
                      <p className="text-gray-500 text-sm">{office.postalCode}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="text-blue-600 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-gray-800 font-medium">{office.phone}</p>
                      <p className="text-gray-500 text-sm">Mobile: {office.mobile}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-600 flex-shrink-0" size={18} />
                    <p className="text-blue-600 font-semibold">{office.email}</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <p className="text-gray-700 text-sm font-medium">{office.hours}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">Services Available</h4>
                  <div className="flex flex-wrap gap-2">
                    {office.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 px-6 hover:bg-blue-700 transition-colors duration-300 font-semibold uppercase tracking-widest rounded-xl">
                    Schedule Visit
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-2 px-6 hover:bg-blue-50 transition-colors duration-300 font-semibold text-sm rounded-xl">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">FIND US</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Locate our offices and showrooms across Oman. Visit us for personalized consultations and product demonstrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Interactive Leaflet Map */}
            <div className="relative">
              <OfficeMap />
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <h4 className="font-bold text-sm text-gray-800 mb-1">Fortune Gifts Locations</h4>
                <p className="text-xs text-gray-600">Click markers for details</p>
              </div>
            </div>

            {/* Location Quick Access */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Quick Location Access</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-600 transition-colors">
                    <div>
                      <h4 className="font-bold text-gray-800">Muscat Head Office</h4>
                      <p className="text-gray-600 text-sm">Al Khuwair Commercial Complex</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                        Directions
                      </button>
                      <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors">
                        Call
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-600 transition-colors">
                    <div>
                      <h4 className="font-bold text-gray-800">Salalah Branch</h4>
                      <p className="text-gray-600 text-sm">Al Dahariz Commercial Area</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                        Directions
                      </button>
                      <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors">
                        Call
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-600 transition-colors">
                    <div>
                      <h4 className="font-bold text-gray-800">Sohar Industrial</h4>
                      <p className="text-gray-600 text-sm">Sohar Industrial Port Area</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                        Directions
                      </button>
                      <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors">
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Need Help Finding Us?</h3>
                <p className="text-blue-700 mb-4">
                  Our team is ready to assist you with directions and provide guidance to any of our locations.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                    Call for Directions
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors font-semibold">
                    WhatsApp Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">FREQUENTLY ASKED</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our products and ordering process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 p-6 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-3">How long does order processing take?</h3>
              <p className="text-gray-600">
                Order processing times vary based on quantity and customization needs. Most orders ship within 1-3 business days, 
                with custom branding taking 5-10 business days depending on the complexity of personalization.
              </p>
            </div>

            <div className="border border-gray-200 p-6 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-3">Do you work with small businesses?</h3>
              <p className="text-gray-600">
                We work with businesses of all sizes, from startups to enterprise companies. Our product range is diverse
                and tailored to fit your specific gifting needs and budget, with no minimum order requirements.
              </p>
            </div>

            <div className="border border-gray-200 p-6 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-3">What customization options are available?</h3>
              <p className="text-gray-600">
                We offer various customization options including custom logos, colors, engraving, and packaging. Our design
                team works with you to create unique branding that represents your company effectively.
              </p>
            </div>

            <div className="border border-gray-200 p-6 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-3">Do you offer eco-friendly gift options?</h3>
              <p className="text-gray-600">
                Yes, we have a dedicated eco-friendly product line including bamboo power banks, wooden USB drives,
                sustainable drinkware, and other environmentally conscious gifts that align with green business practices.
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
              <div className="mb-4">
                <img 
                  src="/fortunelgoo.png" 
                  alt="Fortune Logo" 
                  className="h-8 w-auto object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-blue-100">
                Premium gifts for every occasion. Strengthening relationships through thoughtful, high-quality promotional products.
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
                  <Link href="/products" className="text-blue-100 hover:text-white transition-colors">
                    Products
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
              <h4 className="font-bold mb-4 uppercase tracking-widest">Products</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-blue-100">Technology Gifts</span>
                </li>
                <li>
                  <span className="text-blue-100">Eco-Friendly Products</span>
                </li>
                <li>
                  <span className="text-blue-100">Audio & Speakers</span>
                </li>
                <li>
                  <span className="text-blue-100">Office & Business</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-widest">Contact Info</h4>
              <div className="space-y-2 text-blue-100">
                <p>hello@fortunegifts.com</p>
                <p>+1 (555) 123-4567</p>
                <p>New York, NY</p>
              </div>
              <div className="flex space-x-4 mt-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-white cursor-pointer transition-colors">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-white cursor-pointer transition-colors">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-white cursor-pointer transition-colors">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-500 pt-8 text-center">
            <p className="text-blue-100">© 2025 Fortune Gifts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
