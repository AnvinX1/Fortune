"use client"

import Link from "next/link"
import { Target, Eye, Heart, Award, Globe } from "lucide-react"
import Navigation from "@/components/navigation"

const teamMembers = [
  {
    name: "Ahmed Al-Rashid",
    position: "CEO & Founder",
    image: "/team-ahmed-alrashid.jpg",
    bio: "15+ years of experience in product sourcing and business relationship management across the GCC region.",
  },
  {
    name: "Fatima Al-Zahra",
    position: "CTO",
    image: "/team-fatima-alzahra.jpg",
    bio: "Expert in supply chain management and modern logistics technologies with Middle East expertise.",
  },
  {
    name: "Omar Al-Harthy",
    position: "Head of Product",
    image: "/team-omar-alharthy.jpg",
    bio: "Specializes in product curation and brand partnership development in the Gulf markets.",
  },
  {
    name: "Mariam Al-Balushi",
    position: "Lead Designer",
    image: "/team-mariam-albalushi.jpg",
    bio: "Creative designer with expertise in custom branding and visual identity for regional clients.",
  },
  {
    name: "Khalid Al-Said",
    position: "Quality Manager",
    image: "/team-khalid-alsaid.jpg",
    bio: "Quality assurance expert focused on product standards and customer satisfaction in Oman.",
  },
  {
    name: "Aisha Al-Hinai",
    position: "Operations Manager",
    image: "/team-aisha-alhinai.jpg",
    bio: "Operations specialist with a track record of successful order fulfillment and delivery across Oman.",
  },
]

const stats = [
  { number: "5000+", label: "Gifts Delivered" },
  { number: "150+", label: "Happy Clients" },
  { number: "8+", label: "Years Experience" },
  { number: "25+", label: "Team Members" },
]

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Enhanced Header Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-widest mb-6">
            Our Story
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            <span className="block">CRAFTING</span>
            <span className="block text-blue-200">MEANINGFUL</span>
            <span className="block">CONNECTIONS</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-blue-100 leading-relaxed">
            Since 2017, Fortune has been Oman's premier gifting company, dedicated to transforming ordinary promotional items into extraordinary gifts 
            that create lasting impressions and strengthen business relationships across the Sultanate and the broader Gulf region.
          </p>
          
          {/* Key Stats in Hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">8+</div>
              <div className="text-sm text-blue-200 uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">5000+</div>
              <div className="text-sm text-blue-200 uppercase tracking-widest">Gifts Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">150+</div>
              <div className="text-sm text-blue-200 uppercase tracking-widest">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-sm text-blue-200 uppercase tracking-widest">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Company Story */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-12 md:col-span-6">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest mb-6">
                Our Journey
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">FROM VISION TO IMPACT</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2017</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">The Beginning</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Founded with a vision to bridge the gap between ordinary promotional items and meaningful gifts 
                      that create lasting impressions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2020</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Digital Transformation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Launched our online platform, expanding our reach and making premium promotional gifts 
                      accessible to businesses worldwide.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2025</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Leading Innovation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Today, we're a trusted partner for businesses of all sizes, helping them strengthen 
                      relationships through thoughtful, high-quality promotional gifts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden shadow-xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🎁</div>
                      <h3 className="text-2xl font-bold text-blue-800 mb-2">Our Mission</h3>
                      <p className="text-blue-600 leading-relaxed">
                        To transform every promotional gift into a meaningful connection that strengthens 
                        business relationships and builds lasting brand loyalty.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl transform rotate-12"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest mb-4">
              Our Foundation
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">MISSION & VISION</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The driving force behind everything we do at Fortune Gifts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="group bg-white p-10 shadow-xl rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-bold tracking-tighter mb-6">OUR MISSION</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower businesses with premium promotional gifts that strengthen relationships, enhance brand recognition, and
                create lasting positive impressions that drive business growth and customer loyalty.
              </p>
              <div className="mt-6 flex items-center text-blue-600 font-semibold">
                <span>Learn More</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Vision */}
            <div className="group bg-white p-10 shadow-xl rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Eye className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-bold tracking-tighter mb-6">OUR VISION</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the leading provider of premium promotional gifts worldwide, helping organizations create meaningful
                connections and achieve unprecedented levels of brand loyalty through thoughtful, high-quality products.
              </p>
              <div className="mt-6 flex items-center text-blue-600 font-semibold">
                <span>Explore Vision</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest mb-4">
              What Drives Us
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">OUR VALUES</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide our decisions and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">QUALITY</h3>
              <p className="text-gray-600 leading-relaxed">
                We source only the finest products, ensuring every gift meets our high standards for quality, durability, and
                aesthetic appeal. Every item reflects our commitment to excellence.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">EXCELLENCE</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in every interaction, continuously improving our product selection and delivering
                exceptional customer service that exceeds expectations.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">INNOVATION</h3>
              <p className="text-gray-600 leading-relaxed">
                We embrace new trends and creative approaches to gift selection, staying ahead of market demands and
                delivering fresh, relevant products that make lasting impressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 md:px-8 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 uppercase tracking-widest text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Grid */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest mb-4">
              Meet Our Experts
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">OUR TEAM</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to delivering exceptional promotional gifts and outstanding customer experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-4xl mb-2">👤</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4 uppercase tracking-widest text-sm">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:text-blue-700 transition-colors">
                    <span>Learn More</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
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
