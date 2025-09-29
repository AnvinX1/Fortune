"use client"

import Link from "next/link"
import { useState } from "react"
import { Facebook, Linkedin, Instagram, Search, Play, Filter } from "lucide-react"

const videoCategories = [
  "All",
  "Digital Strategy",
  "Web Development",
  "Business Consulting",
  "Data Analytics",
  "Cloud Solutions",
]

const videoData = [
  {
    id: 1,
    title: "Digital Transformation Strategies",
    category: "Digital Strategy",
    duration: "12:45",
    thumbnail: "/digital-transformation-presentation.jpg",
    description: "Learn how to implement effective digital transformation strategies for your business.",
  },
  {
    id: 2,
    title: "Modern Web Development Practices",
    category: "Web Development",
    duration: "18:30",
    thumbnail: "/web-development-coding-screen.png",
    description: "Best practices and modern approaches to building scalable web applications.",
  },
  {
    id: 3,
    title: "Business Process Optimization",
    category: "Business Consulting",
    duration: "15:20",
    thumbnail: "/business-process-flowchart.png",
    description: "Streamline your business processes for maximum efficiency and productivity.",
  },
  {
    id: 4,
    title: "Data-Driven Decision Making",
    category: "Data Analytics",
    duration: "22:15",
    thumbnail: "/data-analytics-dashboard.png",
    description: "Harness the power of data analytics to make informed business decisions.",
  },
  {
    id: 5,
    title: "Cloud Migration Best Practices",
    category: "Cloud Solutions",
    duration: "16:40",
    thumbnail: "/cloud-computing-infrastructure.jpg",
    description: "Step-by-step guide to successful cloud migration and optimization.",
  },
  {
    id: 6,
    title: "Strategic Planning Workshop",
    category: "Digital Strategy",
    duration: "25:10",
    thumbnail: "/strategic-planning-meeting.jpg",
    description: "Comprehensive workshop on developing effective digital strategies.",
  },
  {
    id: 7,
    title: "API Development Fundamentals",
    category: "Web Development",
    duration: "14:55",
    thumbnail: "/api-development-code.png",
    description: "Learn the fundamentals of building robust and scalable APIs.",
  },
  {
    id: 8,
    title: "Performance Analytics Deep Dive",
    category: "Data Analytics",
    duration: "19:30",
    thumbnail: "/performance-analytics-charts.jpg",
    description: "Advanced techniques for measuring and improving business performance.",
  },
  {
    id: 9,
    title: "Change Management Strategies",
    category: "Business Consulting",
    duration: "17:25",
    thumbnail: "/change-management-presentation.jpg",
    description: "Effective strategies for managing organizational change and transformation.",
  },
]

export default function VideoLibrary() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredVideos = videoData.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
            <Link href="/video-library" className="text-sm uppercase tracking-widest text-blue-600">
              Video Library
            </Link>
            <Link href="/contact" className="text-sm uppercase tracking-widest hover:text-blue-600 transition-colors">
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
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">VIDEO LIBRARY</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our comprehensive collection of educational videos covering digital transformation, business
            strategies, and technology solutions.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="text-gray-600" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600"
              >
                {videoCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          {filteredVideos.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No videos found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-video bg-gray-100">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                        <Play className="text-white ml-1" size={24} />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-widest">
                      {video.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
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
