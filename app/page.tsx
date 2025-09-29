import Link from "next/link"
import { Facebook, Linkedin, Instagram, ArrowRight, Users, Shield, Zap, Award } from "lucide-react"

export default function Home() {
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
            <Link href="/contact" className="text-sm uppercase tracking-widest hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Floating Social Media Icons */}
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 mb-8 md:mb-0">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
              <span className="text-blue-600">SMART</span>
              <br />
              SOLUTIONS
              <br />
              FOR SMART
              <br />
              <span className="text-blue-600">BUSINESS</span>
            </h1>
            <p className="text-xl max-w-2xl mb-8 text-gray-600">
              Empowering businesses with cutting-edge digital solutions that drive growth, efficiency, and innovation in
              today's competitive landscape.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-blue-700 transition-colors">
              Book a Service
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 flex items-center justify-center">
            <div className="relative w-full aspect-square">
              <div className="w-full h-full bg-blue-600 flex items-center justify-center">
                <div className="text-white text-6xl font-bold">F</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Short) */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6">
              <div className="aspect-[4/3] bg-white relative">
                <div className="absolute inset-4 border-2 border-blue-600"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 text-4xl font-bold">
                  FORTUNE
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <h2 className="text-4xl font-bold tracking-tighter mb-6">WHO WE ARE</h2>
              <p className="text-lg mb-6 text-gray-600">
                Fortune Business Solution is a forward-thinking company dedicated to transforming businesses through
                innovative digital solutions and strategic consulting.
              </p>
              <p className="text-gray-600 mb-8">
                We combine cutting-edge technology with deep industry expertise to deliver results that matter to your
                bottom line.
              </p>
              <Link href="/about" className="text-blue-600 font-semibold flex items-center hover:underline">
                Learn More <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12 text-center">WHY CHOOSE US</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 border-2 border-transparent hover:border-blue-600 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our team of seasoned professionals brings years of industry experience to every project.
              </p>
            </div>

            <div className="group p-8 border-2 border-transparent hover:border-blue-600 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Reliable Solutions</h3>
              <p className="text-gray-600">
                We deliver robust, scalable solutions that stand the test of time and grow with your business.
              </p>
            </div>

            <div className="group p-8 border-2 border-transparent hover:border-blue-600 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick turnaround times without compromising on quality or attention to detail.
              </p>
            </div>

            <div className="group p-8 border-2 border-transparent hover:border-blue-600 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful projects and satisfied clients across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12 text-center">OUR SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">01</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Strategy</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive digital transformation strategies tailored to your business goals and market position.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Learn More</button>
            </div>

            <div className="bg-white p-8 group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">02</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Custom web applications and websites built with modern technologies and best practices.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Learn More</button>
            </div>

            <div className="bg-white p-8 group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">03</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Business Consulting</h3>
              <p className="text-gray-600 mb-6">
                Strategic business consulting to optimize operations and drive sustainable growth.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Learn More</button>
            </div>

            <div className="bg-white p-8 group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">04</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Data Analytics</h3>
              <p className="text-gray-600 mb-6">
                Advanced analytics solutions to turn your data into actionable business insights.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Learn More</button>
            </div>

            <div className="bg-white p-8 group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">05</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 mb-6">
                Scalable cloud infrastructure and migration services for modern businesses.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Learn More</button>
            </div>

            <div className="bg-white p-8 group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">06</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Support & Maintenance</h3>
              <p className="text-gray-600 mb-6">
                Ongoing support and maintenance to keep your systems running smoothly.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients / Testimonials */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12 text-center">CLIENT TESTIMONIALS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-l-4 border-blue-600 shadow-lg">
              <p className="text-gray-600 mb-6 italic">
                "Fortune Business Solution transformed our digital presence completely. Their strategic approach and
                technical expertise delivered results beyond our expectations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-sm text-gray-600">CEO, Tech Corp</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-blue-600 shadow-lg">
              <p className="text-gray-600 mb-6 italic">
                "Professional, reliable, and innovative. The team at Fortune consistently delivers high-quality
                solutions that drive real business value."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah Miller</h4>
                  <p className="text-sm text-gray-600">CTO, Innovation Labs</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-blue-600 shadow-lg">
              <p className="text-gray-600 mb-6 italic">
                "Working with Fortune has been a game-changer for our business. Their expertise in digital
                transformation is unmatched."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <h4 className="font-bold">Michael Johnson</h4>
                  <p className="text-sm text-gray-600">Director, Global Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tighter mb-6">STAY UPDATED</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on business technology and digital transformation.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600"
            />
            <button className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition-colors">Subscribe</button>
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
