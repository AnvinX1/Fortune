"use client"

import Link from "next/link"
import { ArrowRight, Users, Shield, Zap, Award } from "lucide-react"
import { useState, useEffect } from "react"
// Removed 3D globe in favor of static brand logo

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime: number
    let animationFrame: number
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    // Start animation after a delay
    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate)
    }, 500)
    
    return () => {
      clearTimeout(timeout)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])
  
  return <span>{count.toLocaleString()}</span>
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <main className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="pt-28 pb-0 px-4 md:pt-36 md:pb-0 md:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden min-h-screen">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-600 rounded-full hidden md:block animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-blue-600 rounded-full hidden md:block animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-blue-600 rounded-full hidden md:block animate-ping" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 border-2 border-blue-600 rounded-full hidden md:block animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>

        {/* Animated Globe/Net Web in Top Right Corner */}
        <div className="absolute top-8 right-8 w-20 h-20 hidden md:block z-20">
          <div className="relative w-full h-full">
            {/* Globe/Web Animation */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
              <div className="w-full h-full border-2 border-blue-600 rounded-full relative">
                {/* Web Lines */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-1/2 w-0.5 h-full bg-blue-600 transform -translate-x-1/2"></div>
                  <div className="absolute left-0 top-1/2 w-full h-0.5 bg-blue-600 transform -translate-y-1/2"></div>
                  <div className="absolute top-1/4 left-1/4 w-0.5 h-1/2 bg-blue-600 transform rotate-45 origin-center"></div>
                  <div className="absolute top-1/4 right-1/4 w-0.5 h-1/2 bg-blue-600 transform -rotate-45 origin-center"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-0.5 h-1/2 bg-blue-600 transform -rotate-45 origin-center"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-0.5 h-1/2 bg-blue-600 transform rotate-45 origin-center"></div>
                </div>
                {/* Central Dot */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
            {/* Orbiting Elements */}
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-blue-500 rounded-full transform -translate-x-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-500 rounded-full transform -translate-x-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute left-0 top-1/2 w-1 h-1 bg-blue-500 rounded-full transform -translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute right-0 top-1/2 w-1 h-1 bg-blue-500 rounded-full transform -translate-y-1/2 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className={`col-span-1 md:col-span-7 mb-8 md:mb-0 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-6 md:mb-8">
                <span className={`bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>FORTUNE</span>
                <br />
                <span className={`text-blue-600 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>BUSINESS SOLUTIONS</span>
                <br />
                <span className={`transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>TO NEW HEIGHTS</span>
              </h1>
              <p className={`text-lg md:text-xl max-w-2xl mb-6 md:mb-8 text-gray-700 leading-relaxed transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                Transform your business relationships with our comprehensive suite of premium solutions. From innovative promotional gifts and eco-friendly products to cutting-edge technology accessories and professional services. We deliver excellence across Oman and the Gulf region, helping you build lasting connections and drive meaningful impact.
              </p>
              <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <Link href="/products" className="bg-blue-600 text-white px-6 py-3 md:px-10 md:py-4 text-sm uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-center shadow-xl hover:shadow-2xl rounded-xl font-bold group">
                  Explore Products
                  <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-6 py-3 md:px-10 md:py-4 text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 text-center rounded-xl font-bold group">
                  Get Custom Quote
                  <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              <div className={`flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-gray-700 transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Custom Branding</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce"></div>
                  <span className="font-medium">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-ping"></div>
                  <span className="font-medium">Bulk Discounts</span>
                </div>
              </div>

              {/* Trust bar to make hero feel fuller */}
              <div className={`mt-8 md:mt-10 transition-all duration-1000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <p className="text-xs md:text-sm text-gray-500 mb-3">Trusted by leading companies</p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 max-w-xl">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-8 sm:h-10 bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center text-[10px] sm:text-xs text-gray-400">
                      LOGO
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-2xl md:max-w-4xl">

                {/* Brand logo (replaces previous particle/3D mesh) */}
                <div className="flex items-center justify-center relative z-10">
                  <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] relative">
                    {/* Subtle glow behind logo to enrich empty space */}
                    <div className="absolute -inset-10 rounded-full blur-3xl opacity-50"
                         style={{
                           background:
                             'radial-gradient(closest-side, rgba(59,130,246,0.25), rgba(59,130,246,0.05), transparent)'
                         }}
                    />
                    <img
                      src="/fortunelgoo.png"
                      alt="Fortune Logo"
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Redesigned About Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-24 h-24 border-2 border-blue-600 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-blue-600 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className={`inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <span className="text-sm font-semibold uppercase tracking-widest">About Us</span>
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold tracking-tighter mb-6 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>WHO WE ARE</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className={`order-2 lg:order-1 transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="aspect-[4/3] flex items-center justify-center">
                    <img 
                      src="/fortunelgoo.png" 
                      alt="Fortune Logo" 
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 delay-800 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="space-y-6">
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Oman's Premier <span className="text-blue-600">Gifting Partner</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fortune is Oman's trusted partner in premium gifting solutions, specializing in promotional products, 
                  eco-friendly gifts, and technology accessories that create memorable experiences across the Sultanate.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We curate exceptional gift collections that strengthen relationships, boost brand recognition, 
                  and make every occasion special with quality products and personalized service throughout Oman and the Gulf region.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="/contact" className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-20 px-4 md:px-8 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-40 h-40 border-2 border-blue-600 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 border-2 border-blue-600 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className={`inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <span className="text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold tracking-tighter mb-6 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>OUR ADVANTAGES</h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              We're committed to delivering exceptional value through premium products, personalized service, and innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:border-blue-300 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <Users className="text-white group-hover:animate-pulse" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Quality Products</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                We source premium quality gifts and promotional products from trusted suppliers worldwide, ensuring every item meets our high standards.
              </p>
            </div>

            <div className={`group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:border-blue-300 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <Shield className="text-white group-hover:animate-bounce" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Custom Branding</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                Personalize your gifts with custom logos, colors, and designs to strengthen your brand presence and create lasting impressions.
              </p>
            </div>

            <div className={`group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:border-blue-300 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <Zap className="text-white group-hover:animate-ping" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                Quick turnaround times with reliable shipping to ensure your gifts arrive on time for any occasion or event.
              </p>
            </div>

            <div className={`group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:border-blue-300 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <Award className="text-white group-hover:animate-spin" style={{ animationDuration: '2s' }} size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Eco-Friendly Options</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                Sustainable gift options including bamboo products and eco-friendly materials for conscious gifting and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Products Preview */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 animate-stagger" style={{ animationDelay: '0.3s' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest mb-4">
              Featured Products
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">POPULAR CHOICES</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most requested promotional gifts that consistently deliver exceptional value and lasting impressions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
              <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-blue-500/5 to-transparent blur-2xl"></div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">Category</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">Technology Gifts</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">Branded devices and accessories for modern teams and events.</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-500">Details on request</span>
                <Link href="/products" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                  Explore
                </Link>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700"></div>
              <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent blur-2xl"></div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-600">Category</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">Eco‑Friendly Products</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">Sustainable materials and planet‑positive gifting.</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-500">Details on request</span>
                <Link href="/products" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700">
                  Explore
                </Link>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"></div>
              <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent blur-2xl"></div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-purple-600">Category</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">Audio & Speakers</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">Headphones, earbuds, speakers and sound accessories.</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-500">Details on request</span>
                <Link href="/products" className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-700">
                  Explore
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/products" className="inline-flex items-center bg-blue-600 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl rounded-xl">
              View All Products
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12 text-center">OUR PRODUCTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">01</div>
              </div>
              <h3 className="text-xl font-bold mb-4">STAFFING SOLUTIONS</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive staffing solutions to meet your business needs with skilled professionals and temporary workforce.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Explore Services</button>
            </div>

            <div className="bg-white p-8 group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">02</div>
              </div>
              <h3 className="text-xl font-bold mb-4">PRO SERVICES</h3>
              <p className="text-gray-600 mb-6">
                Professional services including consulting, project management, and specialized business solutions.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Explore Services</button>
            </div>

            <div className="bg-white p-8 group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">03</div>
              </div>
              <h3 className="text-xl font-bold mb-4">CORPORATE GIFTS</h3>
              <p className="text-gray-600 mb-6">
                Premium corporate gifting solutions with custom branding for client appreciation and employee recognition.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Explore Products</button>
            </div>

            <div className="bg-white p-8 group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">04</div>
              </div>
              <h3 className="text-xl font-bold mb-4">CORPORATE EVENTS</h3>
              <p className="text-gray-600 mb-6">
                Complete corporate event management including conferences, seminars, and business gatherings.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Explore Services</button>
            </div>

            <div className="bg-white p-8 group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">05</div>
              </div>
              <h3 className="text-xl font-bold mb-4">ENTERTAINMENT EVENTS</h3>
              <p className="text-gray-600 mb-6">
                Entertainment event planning and management for corporate parties, team building, and celebrations.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Explore Services</button>
            </div>

            <div className="bg-white p-8 group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">06</div>
              </div>
              <h3 className="text-xl font-bold mb-4">BRANDING</h3>
              <p className="text-gray-600 mb-6">
                Complete branding solutions including logo design, brand identity, and marketing materials.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Explore Services</button>
            </div>

            <div className="bg-white p-8 group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">07</div>
              </div>
              <h3 className="text-xl font-bold mb-4">FITOUTS</h3>
              <p className="text-gray-600 mb-6">
                Professional office and commercial space fitouts with modern design and functional layouts.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Explore Services</button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-200">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">TRUSTED BY LEADING COMPANIES</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to partner with industry leaders and established businesses across Oman and the Gulf region.
            </p>
          </div>
          
          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="group flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
              <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">CLIENT LOGO</span>
              </div>
            </div>
            <div className="group flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
              <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">CLIENT LOGO</span>
              </div>
            </div>
            <div className="group flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
              <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">CLIENT LOGO</span>
              </div>
            </div>
            <div className="group flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
              <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">CLIENT LOGO</span>
              </div>
            </div>
            <div className="group flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
              <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">CLIENT LOGO</span>
              </div>
            </div>
            <div className="group flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
              <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">CLIENT LOGO</span>
              </div>
            </div>
          </div>
          
          {/* Reference to Brochure */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">For a complete list of our clients and case studies</p>
            <Link href="/contact" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
              View Our Brochure
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients / Testimonials */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest mb-4">
              Client Success Stories
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">WHAT OUR CLIENTS SAY</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Fortune.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "Fortune's promotional gifts have been a game-changer for our client relationships. The quality is exceptional 
                and our clients are always impressed with the thoughtful selections. We've seen a 40% increase in client satisfaction since switching to Fortune."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold">Jennifer Davis</h4>
                  <p className="text-sm text-gray-600">Marketing Director</p>
                  <p className="text-sm text-blue-600 font-semibold">TechCorp Solutions</p>
                  <p className="text-xs text-gray-500 mt-1">Fortune Client Since 2020</p>
                </div>
              </div>
            </div>

            <div className="group bg-white p-8 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "The eco-friendly gift options from Fortune align perfectly with our company values. Our employees love 
                the bamboo products and sustainable choices. The custom branding options are outstanding and really represent our brand well."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah Martinez</h4>
                  <p className="text-sm text-gray-600">HR Manager</p>
                  <p className="text-sm text-green-600 font-semibold">Green Solutions Inc</p>
                  <p className="text-xs text-gray-500 mt-1">Fortune Client Since 2019</p>
                </div>
              </div>
            </div>

            <div className="group bg-white p-8 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "Fast delivery and excellent customer service. Fortune made our corporate gifting program seamless and 
                our clients are always delighted with the premium quality products. The bulk pricing is very competitive."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <h4 className="font-bold">Michael Johnson</h4>
                  <p className="text-sm text-gray-600">Sales Director</p>
                  <p className="text-sm text-purple-600 font-semibold">Global Solutions Ltd</p>
                  <p className="text-xs text-gray-500 mt-1">Fortune Client Since 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">READY TO ELEVATE YOUR BRAND?</h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Join hundreds of satisfied clients who trust Fortune for their promotional gift needs. 
              Get custom quotes, bulk pricing, and personalized branding solutions that make a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Custom Quote
              </Link>
              <Link href="/products" className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Browse Products
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-bold mb-2">Fast Delivery</h3>
                <p className="text-blue-100 text-sm">Quick turnaround times for urgent orders</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="font-bold mb-2">Custom Branding</h3>
                <p className="text-blue-100 text-sm">Personalized logos and designs</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold mb-2">Bulk Pricing</h3>
                <p className="text-blue-100 text-sm">Competitive rates for large orders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">STAY UPDATED</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest gift trends, new product launches, and exclusive promotional offers.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600 rounded-l-lg"
            />
            <button className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition-colors rounded-r-lg">Subscribe</button>
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
