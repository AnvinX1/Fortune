import Link from "next/link"
import { Facebook, Linkedin, Instagram, Check, Star, Clock } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Digital Strategy",
    subtitle: "Transform Your Business",
    description: "Comprehensive digital transformation strategies tailored to your business goals and market position.",
    features: [
      "Digital Transformation Roadmap",
      "Market Analysis & Competitive Research",
      "Technology Stack Recommendations",
      "ROI Optimization Strategies",
      "Change Management Planning",
    ],
    price: "Starting at $5,000",
    duration: "4-8 weeks",
    icon: "01",
  },
  {
    id: 2,
    title: "Web Development",
    subtitle: "Modern Web Solutions",
    description: "Custom web applications and websites built with modern technologies and best practices.",
    features: [
      "Responsive Web Design",
      "Custom Web Applications",
      "E-commerce Solutions",
      "API Development & Integration",
      "Performance Optimization",
    ],
    price: "Starting at $8,000",
    duration: "6-12 weeks",
    icon: "02",
  },
  {
    id: 3,
    title: "Business Consulting",
    subtitle: "Strategic Growth",
    description: "Strategic business consulting to optimize operations and drive sustainable growth.",
    features: [
      "Process Optimization",
      "Organizational Restructuring",
      "Performance Metrics & KPIs",
      "Strategic Planning",
      "Risk Assessment & Mitigation",
    ],
    price: "Starting at $3,500",
    duration: "2-6 weeks",
    icon: "03",
  },
  {
    id: 4,
    title: "Data Analytics",
    subtitle: "Data-Driven Insights",
    description: "Advanced analytics solutions to turn your data into actionable business insights.",
    features: [
      "Business Intelligence Dashboards",
      "Predictive Analytics",
      "Data Visualization",
      "Custom Reporting Solutions",
      "Machine Learning Implementation",
    ],
    price: "Starting at $6,000",
    duration: "4-10 weeks",
    icon: "04",
  },
  {
    id: 5,
    title: "Cloud Solutions",
    subtitle: "Scalable Infrastructure",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    features: [
      "Cloud Migration Strategy",
      "Infrastructure as Code",
      "Auto-scaling Solutions",
      "Security & Compliance",
      "Cost Optimization",
    ],
    price: "Starting at $7,500",
    duration: "6-14 weeks",
    icon: "05",
  },
  {
    id: 6,
    title: "Support & Maintenance",
    subtitle: "Ongoing Excellence",
    description: "Ongoing support and maintenance to keep your systems running smoothly.",
    features: [
      "24/7 System Monitoring",
      "Regular Updates & Patches",
      "Performance Optimization",
      "Security Audits",
      "Technical Support",
    ],
    price: "Starting at $2,000/month",
    duration: "Ongoing",
    icon: "06",
  },
]

const testimonials = [
  {
    name: "Jennifer Adams",
    position: "VP of Operations",
    company: "TechFlow Inc",
    content:
      "Fortune's digital strategy completely transformed our business operations. We saw a 40% increase in efficiency within the first quarter.",
    rating: 5,
  },
  {
    name: "Robert Chen",
    position: "CEO",
    company: "InnovateCorp",
    content:
      "The web development team delivered beyond our expectations. Our new platform has increased customer engagement by 60%.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    position: "Director of Analytics",
    company: "DataDriven Solutions",
    content:
      "Their data analytics expertise helped us uncover insights we never knew existed. ROI was evident within weeks.",
    rating: 5,
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your business goals, challenges, and current state through comprehensive analysis.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Our team develops a customized strategy and roadmap tailored to your specific needs and objectives.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "We execute the plan with precision, keeping you informed every step of the way with regular updates.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous monitoring and optimization ensure maximum performance and long-term success.",
  },
]

export default function Services() {
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
            <Link href="/services" className="text-sm uppercase tracking-widest text-blue-600">
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
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">OUR SERVICES</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white border-2 border-gray-200 p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                  <div className="text-white text-2xl font-bold">{service.icon}</div>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-blue-600 font-semibold mb-4 uppercase tracking-widest text-sm">{service.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="text-blue-600 mr-3 flex-shrink-0" size={16} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="mr-2" size={16} />
                      {service.duration}
                    </div>
                    <div className="text-blue-600 font-bold text-lg">{service.price}</div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 hover:bg-blue-700 transition-colors duration-300 uppercase tracking-widest text-sm font-semibold">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">OUR PROCESS</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black transition-colors duration-300">
                  <span className="text-white text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">CLIENT SUCCESS STORIES</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how our services have transformed businesses across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-blue-600 font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">READY TO GET STARTED?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Let's discuss how our services can help transform your business and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Project
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Schedule Consultation
            </button>
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
