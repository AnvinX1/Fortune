import Link from "next/link"
import { Facebook, Linkedin, Instagram, Target, Eye, Heart, Award, Globe } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "CEO & Founder",
    image: "/team-sarah-johnson.jpg",
    bio: "15+ years of experience in digital transformation and business strategy.",
  },
  {
    name: "Michael Chen",
    position: "CTO",
    image: "/team-michael-chen.jpg",
    bio: "Expert in cloud architecture and modern web development technologies.",
  },
  {
    name: "Emily Rodriguez",
    position: "Head of Strategy",
    image: "/team-emily-rodriguez.jpg",
    bio: "Specializes in business consulting and organizational transformation.",
  },
  {
    name: "David Thompson",
    position: "Lead Developer",
    image: "/team-david-thompson.jpg",
    bio: "Full-stack developer with expertise in scalable application development.",
  },
  {
    name: "Lisa Wang",
    position: "Data Analyst",
    image: "/team-lisa-wang.jpg",
    bio: "Data science expert focused on business intelligence and analytics.",
  },
  {
    name: "James Miller",
    position: "Project Manager",
    image: "/team-james-miller.jpg",
    bio: "Agile project management specialist with a track record of successful deliveries.",
  },
]

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "150+", label: "Happy Clients" },
  { number: "8+", label: "Years Experience" },
  { number: "25+", label: "Team Members" },
]

export default function About() {
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
            <Link href="/about" className="text-sm uppercase tracking-widest text-blue-600">
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
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">ABOUT US</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our story, mission, and the passionate team behind Fortune Business Solution.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6">
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">OUR STORY</h2>
              <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                Founded in 2017, Fortune Business Solution emerged from a simple yet powerful vision: to bridge the gap
                between traditional business practices and cutting-edge digital innovation.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our founders, Sarah Johnson and Michael Chen, recognized that many businesses were struggling to adapt
                to the rapidly evolving digital landscape. They combined their expertise in business strategy and
                technology to create solutions that not only solve immediate challenges but also position companies for
                long-term success.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we've grown into a trusted partner for businesses of all sizes, helping them navigate digital
                transformation with confidence and achieve sustainable growth through innovative solutions.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="aspect-[4/3] bg-gray-100 relative">
                <img
                  src="/company-story-office.jpg"
                  alt="Fortune Business Solution Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold tracking-tighter mb-6">OUR MISSION</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and
                create lasting competitive advantages in an ever-evolving marketplace.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold tracking-tighter mb-6">OUR VISION</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading catalyst for business transformation, helping organizations worldwide embrace digital
                innovation and achieve unprecedented levels of success and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 text-center">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">INTEGRITY</h3>
              <p className="text-gray-600">
                We conduct business with the highest ethical standards, building trust through transparency and honest
                communication.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">EXCELLENCE</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, continuously improving our skills and delivering
                exceptional results.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">INNOVATION</h3>
              <p className="text-gray-600">
                We embrace new technologies and creative approaches to solve complex business challenges and drive
                progress.
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

      {/* Team Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 text-center">OUR TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3 uppercase tracking-widest text-sm">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600 transition-colors duration-300 pointer-events-none"></div>
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
