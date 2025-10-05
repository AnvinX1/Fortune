"use client"

import Link from "next/link"
import { Check, Star, Clock } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Technology Gifts",
    subtitle: "Wireless & Charging Solutions",
    description: "Premium wireless charging stands, power banks, cables, and mobile accessories for the tech-savvy.",
    features: [
      "Wireless Fast Charging Stands",
      "Multi-Purpose Charging Organizers",
      "Magnetic Wireless Power Banks",
      "Light-up Logo Cables",
      "Travel Adapters & Mobile Stands",
    ],
    price: "Starting at $15",
    duration: "1-3 days",
    icon: "01",
  },
  {
    id: 2,
    title: "Eco-Friendly Products",
    subtitle: "Sustainable Gift Solutions",
    description: "Environmentally conscious gifts including bamboo power banks, water bottles, and wooden accessories.",
    features: [
      "Light Up Logo Bamboo Power Banks",
      "Bamboo Water Bottles",
      "Wooden USB Flash Drives",
      "Eco-Friendly USB Drives",
      "Leather USB Flash Drives",
    ],
    price: "Starting at $20",
    duration: "1-3 days",
    icon: "02",
  },
  {
    id: 3,
    title: "Audio & Speakers",
    subtitle: "Premium Sound Solutions",
    description: "High-quality wireless earbuds, Bluetooth speakers, and audio accessories with modern features.",
    features: [
      "Wireless Earbuds",
      "Bluetooth Speakers",
      "Earbuds with Charging Cases",
      "Humidifiers",
      "Premium Audio Accessories",
    ],
    price: "Starting at $25",
    duration: "1-3 days",
    icon: "03",
  },
  {
    id: 4,
    title: "Office & Business",
    subtitle: "Professional Accessories",
    description: "Portfolio organizers, business card holders, writing instruments, and professional office supplies.",
    features: [
      "Portfolio Organizers",
      "A5 Organizers & Notebooks",
      "Business Card Holders",
      "Metal & Plastic Pens",
      "Professional Writing Sets",
    ],
    price: "Starting at $12",
    duration: "1-3 days",
    icon: "04",
  },
  {
    id: 5,
    title: "Drinkware & Dining",
    subtitle: "Premium Tableware",
    description: "Stainless steel drinkware, ceramic mugs, lunch boxes with cutlery, and bamboo water bottles.",
    features: [
      "Stainless Steel Drinkware",
      "Lunch Boxes with Cutlery",
      "Bamboo Water Bottles",
      "Ceramic Mugs",
      "Premium Tableware Sets",
    ],
    price: "Starting at $18",
    duration: "1-3 days",
    icon: "05",
  },
  {
    id: 6,
    title: "Bags & Accessories",
    subtitle: "Travel & Storage Solutions",
    description: "Multifunctional travel backpacks, laptop bags, shopping bags, wallets, and promotional accessories.",
    features: [
      "Multifunctional Travel Backpacks",
      "Laptop Bags",
      "Non-Woven Shopping Bags",
      "Wallets & Card Holders",
      "Promotional Bags & Keychains",
    ],
    price: "Starting at $22",
    duration: "1-3 days",
    icon: "06",
  },
]

const testimonials = [
  {
    name: "Jennifer Adams",
    position: "Marketing Director",
    company: "TechFlow Inc",
    content:
      "Fortune's promotional gifts have elevated our client relationships. The quality is outstanding and our clients are always impressed with the thoughtful selections.",
    rating: 5,
  },
  {
    name: "Robert Chen",
    position: "CEO",
    company: "InnovateCorp",
    content:
      "The eco-friendly gift options from Fortune align perfectly with our company values. Our employees love the bamboo products and sustainable choices.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    position: "HR Manager",
    company: "DataDriven Solutions",
    content:
      "Fast delivery and excellent customer service. Fortune made our corporate gifting program seamless and our team members are always delighted with the premium quality products.",
    rating: 5,
  },
]

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We start by understanding your gifting needs, brand requirements, and budget through detailed consultation and analysis.",
  },
  {
    step: "02",
    title: "Selection",
    description: "Our team curates the perfect gift selection from our premium collection, tailored to your specific occasion and audience.",
  },
  {
    step: "03",
    title: "Customization",
    description: "We customize your gifts with logos, colors, and branding, ensuring they perfectly represent your company identity.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Fast and reliable delivery ensures your gifts arrive on time, creating memorable experiences for your recipients.",
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-white">

      {/* Enhanced Header Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full hidden md:block"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white rounded-full hidden md:block"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full hidden md:block"></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 border-2 border-white rounded-full hidden md:block"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-2 text-xs md:text-sm font-semibold uppercase tracking-widest mb-4 md:mb-6">
            Premium Services
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight md:tracking-tighter mb-6 md:mb-8 leading-tight">
            <span className="block break-words">COMPREHENSIVE</span>
            <span className="block text-blue-200">GIFTING</span>
            <span className="block">SERVICES</span>
          </h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 text-blue-100 leading-relaxed px-2 md:px-0">
            From consultation to delivery, we provide end-to-end promotional gift services that strengthen your brand 
            and build lasting relationships with clients and employees across Oman and the Gulf region.
          </p>
          
          {/* Service Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">6</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">100%</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">Custom Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">24hr</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">Quote Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">5000+</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">SERVICE CATEGORIES</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive promotional gift solutions tailored to your business needs and brand requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white text-2xl font-bold">{service.icon}</div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-blue-600 font-semibold mb-4 uppercase tracking-widest text-sm">{service.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-sm text-gray-800">Service Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check className="text-blue-600 mr-3 flex-shrink-0" size={16} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="mr-2" size={16} />
                      <span>Delivery: {service.duration}</span>
                    </div>
                    <div className="text-blue-600 font-bold text-lg">{service.price}</div>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 text-white py-4 px-6 hover:bg-blue-700 transition-all duration-300 uppercase tracking-widest text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 block text-center"
                  >
                    Request Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest mb-4">
              How We Work
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">OUR SERVICE PROCESS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures perfect gift selection, seamless execution, and exceptional customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-gray-300 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Process Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2">Fast Turnaround</h3>
              <p className="text-gray-600 text-sm">Quick quotes and rapid delivery</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2">Perfect Match</h3>
              <p className="text-gray-600 text-sm">Tailored solutions for your needs</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-bold text-lg mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">Premium products guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest mb-4">
              Client Stories
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">CLIENT SUCCESS STORIES</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our premium gifting services have strengthened relationships and enhanced brand recognition across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 italic leading-relaxed text-lg">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <p className="text-blue-600 font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-widest mb-6">
            Ready to Start?
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            <span className="block">LET'S CREATE</span>
            <span className="block text-blue-200">MEMORABLE</span>
            <span className="block">EXPERIENCES</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Let's discuss how our premium gifting services can strengthen your relationships, enhance brand recognition, and create lasting impressions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Order
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
          </div>
          
          {/* Service Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold mb-2">Free Consultation</h3>
              <p className="text-blue-100 text-sm">Expert advice at no cost</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold mb-2">Custom Branding</h3>
              <p className="text-blue-100 text-sm">Personalized design solutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="font-bold mb-2">Full Service</h3>
              <p className="text-blue-100 text-sm">End-to-end project management</p>
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
