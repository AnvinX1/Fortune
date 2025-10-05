"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, Filter, Star } from "lucide-react"
import Navigation from "@/components/navigation"

const productCategories = [
  "All",
  "Technology Gifts",
  "Eco-Friendly Products", 
  "Audio & Speakers",
  "Office & Business",
  "Drinkware & Dining",
  "Bags & Accessories",
]

const productData = [
  {
    id: 1,
    name: "Wireless Fast Charging Stand",
    category: "Technology Gifts",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 124,
    description: "Multi-purpose wireless charging stand with LED indicators and fast charging capability. Perfect for office and home use.",
    features: ["15W Fast Wireless Charging", "LED Status Indicators", "Universal Compatibility", "Anti-Slip Base"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 2,
    name: "Light Up Logo Bamboo Power Bank",
    category: "Eco-Friendly Products",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 89,
    description: "Sustainable bamboo wireless power bank with customizable LED logo display. Eco-friendly and stylish.",
    features: ["10000mAh Capacity", "Bamboo Exterior", "LED Logo Display", "Wireless Charging"],
    isNew: false,
    isEcoFriendly: true,
  },
  {
    id: 3,
    name: "Premium Wireless Earbuds",
    category: "Audio & Speakers",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 203,
    description: "High-quality wireless earbuds with charging case and premium sound quality. Perfect for professionals.",
    features: ["Active Noise Cancellation", "30hr Battery Life", "Wireless Charging Case", "Premium Sound"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 4,
    name: "A5 Portfolio Organizer",
    category: "Office & Business",
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 156,
    description: "Professional A5 organizer with USB flash drive integration and business card holder. Ideal for meetings.",
    features: ["A5 Size", "USB Flash Drive", "Business Card Holder", "Premium Leather"],
    isNew: false,
    isEcoFriendly: false,
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    category: "Drinkware & Dining",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 312,
    description: "Premium stainless steel water bottle with bamboo lid and custom engraving option. Keeps drinks cold for 24 hours.",
    features: ["24hr Cold Retention", "Bamboo Lid", "Custom Engraving", "BPA Free"],
    isNew: false,
    isEcoFriendly: true,
  },
  {
    id: 6,
    name: "Multifunctional Travel Backpack",
    category: "Bags & Accessories",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 178,
    description: "Spacious travel backpack with laptop compartment and multiple organization pockets. Perfect for business trips.",
    features: ["Laptop Compartment", "Multiple Pockets", "Water Resistant", "Ergonomic Design"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 7,
    name: "Bluetooth Speaker with Humidifier",
    category: "Audio & Speakers",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 92,
    description: "Innovative 2-in-1 Bluetooth speaker with built-in humidifier and LED lighting. Perfect for office ambiance.",
    features: ["360° Sound", "Built-in Humidifier", "LED Lighting", "12hr Battery"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 8,
    name: "Wooden USB Flash Drive Set",
    category: "Eco-Friendly Products",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 67,
    description: "Set of 3 wooden USB flash drives with different wood types and custom laser engraving. Sustainable and elegant.",
    features: ["64GB Storage Each", "Natural Wood", "Laser Engraving", "Gift Box Included"],
    isNew: false,
    isEcoFriendly: true,
  },
  {
    id: 9,
    name: "Ceramic Mug with Custom Logo",
    category: "Drinkware & Dining",
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 245,
    description: "Premium ceramic mug with custom logo printing and ergonomic handle. Perfect for office use.",
    features: ["Custom Logo Printing", "Ergonomic Handle", "Microwave Safe", "Dishwasher Safe"],
    isNew: false,
    isEcoFriendly: false,
  },
]

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts = productData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.isNew ? 1 : -1
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

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
            Premium Collection
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            <span className="block">DISCOVER</span>
            <span className="block text-blue-200">PREMIUM</span>
            <span className="block">PRODUCTS</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-blue-100 leading-relaxed">
            Explore our curated collection of promotional gifts and accessories. Each product is carefully selected for quality, 
            functionality, and lasting brand impact across Oman and the Gulf region.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm text-blue-200 uppercase tracking-widest">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">6</div>
              <div className="text-sm text-blue-200 uppercase tracking-widest">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">4.8</div>
              <div className="text-sm text-blue-200 uppercase tracking-widest">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-sm text-blue-200 uppercase tracking-widest">Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Search and Filter Section */}
      <section className="py-16 px-4 md:px-8 bg-white border-b border-gray-200">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Find Your Perfect Product</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use our advanced filters to discover products that match your specific needs and preferences
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-gray-50 p-6 rounded-2xl">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="text-gray-600" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300 font-medium"
              >
                {productCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300 font-medium"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>
          
          {/* Active Filters Display */}
          {(searchTerm || selectedCategory !== "All") && (
            <div className="mt-6 flex flex-wrap gap-2">
              {searchTerm && (
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  Search: "{searchTerm}"
                </span>
              )}
              {selectedCategory !== "All" && (
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  Category: {selectedCategory}
                </span>
              )}
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Product Grid */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-3xl font-bold mb-4">No products found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search terms or category filter.</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="bg-blue-600 text-white px-8 py-3 font-semibold uppercase tracking-widest hover:bg-blue-700 transition-colors"
              >
                View All Products
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-gray-600">
                  Showing <span className="font-semibold">{sortedProducts.length}</span> products
                  {searchTerm && (
                    <span> for "<span className="font-semibold">{searchTerm}</span>"</span>
                  )}
                  {selectedCategory !== "All" && (
                    <span> in <span className="font-semibold">{selectedCategory}</span></span>
                  )}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">
                          {product.category === "Technology Gifts" && "🔋"}
                          {product.category === "Eco-Friendly Products" && "🌱"}
                          {product.category === "Audio & Speakers" && "🎧"}
                          {product.category === "Office & Business" && "💼"}
                          {product.category === "Drinkware & Dining" && "🥤"}
                          {product.category === "Bags & Accessories" && "🎒"}
                        </div>
                      </div>
                    </div>
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-blue-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                          New
                        </span>
                      )}
                      {product.isEcoFriendly && (
                        <span className="bg-green-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                          🌱 Eco
                        </span>
                      )}
                    </div>
                    {/* Rating */}
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="text-yellow-400 fill-current" size={14} />
                      <span className="text-sm font-bold">{product.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-sm text-gray-800">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-400 fill-current" size={16} />
                        <Star className="text-yellow-400 fill-current" size={16} />
                        <Star className="text-yellow-400 fill-current" size={16} />
                        <Star className="text-yellow-400 fill-current" size={16} />
                        <Star className="text-yellow-400 fill-current" size={16} />
                      </div>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="w-full py-4 px-6 bg-blue-600 text-white font-bold uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 text-center block rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            </>
          )}
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
            Ready to Order?
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            <span className="block">GET YOUR</span>
            <span className="block text-blue-200">CUSTOM QUOTE</span>
            <span className="block">TODAY</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Interested in any of our products? Contact us for custom quotes, bulk pricing, and personalized branding options. 
            Our team will help you find the perfect promotional gifts for your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Custom Solutions
            </Link>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">Fast Quotes</h3>
              <p className="text-blue-100 text-sm">Get pricing within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold mb-2">Custom Branding</h3>
              <p className="text-blue-100 text-sm">Personalized logo and design</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-bold mb-2">Fast Delivery</h3>
              <p className="text-blue-100 text-sm">Quick turnaround times</p>
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
