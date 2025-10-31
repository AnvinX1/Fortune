"use client"

import Link from "next/link"
import { 
  Instagram, 
  Mail,
  Phone,
  MapPin,
  Users,
  Heart,
  Share2
} from "lucide-react"
import { useState, useEffect } from "react"

const socialMediaPlatforms = [
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/fortunegiftsoman",
    followers: "1.8K",
    description: "Photos & videos",
    color: "bg-gradient-to-br from-purple-600 to-pink-600",
    hoverColor: "hover:from-purple-700 hover:to-pink-700",
    textColor: "text-purple-600",
    bgGradient: "from-purple-500 via-pink-500 to-red-500"
  },
]

const quickStats = [
  {
    icon: Users,
    label: "Total Followers",
    value: "8.4K+",
    description: "Across all platforms"
  },
  {
    icon: Heart,
    label: "Engagement Rate",
    value: "12.5%",
    description: "Average across platforms"
  },
  {
    icon: Share2,
    label: "Content Shared",
    value: "2.1K",
    description: "Posts and updates"
  }
]

export default function SocialMedia() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const handleSocialClick = (url: string, platform: string) => {
    // Track social media clicks
    console.log(`Clicked on ${platform}: ${url}`)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Enhanced Header Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full hidden md:block animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white rounded-full hidden md:block animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full hidden md:block animate-ping" style={{ animationDuration: '2s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 border-2 border-white rounded-full hidden md:block animate-spin" style={{ animationDuration: '15s' }}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className={`inline-block bg-blue-100 text-blue-600 px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-semibold uppercase tracking-widest mb-4 md:mb-6 rounded-full shadow-lg transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            📱 Connect With Us
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-6 md:mb-8">
            <span className={`text-white transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>FOLLOW</span>
            <br />
            <span className={`bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>OUR</span>
            <br />
            <span className={`text-white transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>JOURNEY</span>
            <br />
            <span className={`text-blue-200 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>ON SOCIAL MEDIA</span>
          </h1>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 text-blue-100 leading-relaxed px-2 md:px-0 transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            Stay connected with Fortune Gifts Oman across all our social media platforms. 
            Get the latest updates, product launches, and exclusive offers.
          </p>
          
          {/* Quick Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">{stat.label}</div>
                <div className="text-xs text-blue-300 mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Platforms */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-24 h-24 border-2 border-blue-600 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-blue-600 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className={`inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <span className="text-sm font-semibold uppercase tracking-widest">Instagram</span>
            </div>
            <h2 className={`text-3xl md:text-5xl font-bold tracking-tighter mb-4 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>Follow Us</h2>
            <p className={`text-lg text-gray-600 max-w-xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              We’re active on Instagram. Tap below to see our latest work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
            {socialMediaPlatforms.map((platform, index) => (
              <div
                key={platform.id}
                onClick={() => handleSocialClick(platform.url, platform.name)}
                className={`group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 border border-gray-100 hover:border-gray-200 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${800 + (index * 100)}ms` }}
              >
                <div className={`relative h-20 bg-gradient-to-br ${platform.bgGradient} flex items-center justify-center`}>
                  <platform.icon className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-1 right-1 bg-white bg-opacity-90 px-1.5 py-0.5 rounded text-xs font-semibold text-gray-800">
                    {platform.followers}
                  </div>
                </div>
                
                <div className="p-3">
                  <h3 className="text-sm font-bold mb-1 group-hover:text-blue-600 transition-colors text-center truncate">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 text-xs mb-2 text-center leading-tight">
                    {platform.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Integration */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">DIRECT CONTACT</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prefer direct communication? Reach out to us through these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">hello@fortunegifts.om</p>
              <a 
                href="mailto:hello@fortunegifts.om"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Send Email
              </a>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">+968 2450 1234</p>
              <a 
                href="tel:+96824501234"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Call Now
              </a>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Al Khuwair, Muscat</p>
              <Link 
                href="/contact"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">STAY IN THE LOOP</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, product launches, and company updates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-blue-200 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </main>
  )
}
