"use client"

import Link from "next/link"
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail,
  Phone,
  MapPin,
  Users,
  Heart,
  Share2
} from "lucide-react"

const socialMediaPlatforms = [
  {
    id: "facebook",
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/FortuneGiftsOman",
    followers: "2.5K",
    description: "Updates & news",
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    textColor: "text-blue-600",
    bgGradient: "from-blue-600 to-blue-800"
  },
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
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/fortune-gifts-oman",
    followers: "850",
    description: "Professional updates",
    color: "bg-blue-700",
    hoverColor: "hover:bg-blue-800",
    textColor: "text-blue-700",
    bgGradient: "from-blue-700 to-blue-900"
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/FortuneGiftsOM",
    followers: "1.2K",
    description: "Quick updates",
    color: "bg-sky-500",
    hoverColor: "hover:bg-sky-600",
    textColor: "text-sky-500",
    bgGradient: "from-sky-400 to-sky-600"
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@FortuneGiftsOman",
    followers: "650",
    description: "Videos & demos",
    color: "bg-red-600",
    hoverColor: "hover:bg-red-700",
    textColor: "text-red-600",
    bgGradient: "from-red-500 to-red-700"
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
    url: "https://tiktok.com/@fortunegiftsoman",
    followers: "950",
    description: "Fun videos",
    color: "bg-black",
    hoverColor: "hover:bg-gray-800",
    textColor: "text-black",
    bgGradient: "from-gray-800 to-black"
  },
  {
    id: "pinterest",
    name: "Pinterest",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.372 0 12 0 17.084 3.163 21.426 7.627 23.174c-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.001 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
    url: "https://pinterest.com/fortunegiftsoman",
    followers: "420",
    description: "Inspiration",
    color: "bg-red-600",
    hoverColor: "hover:bg-red-700",
    textColor: "text-red-600",
    bgGradient: "from-red-500 to-pink-600"
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    ),
    url: "https://wa.me/96891234567",
    followers: "Direct",
    description: "Direct support",
    color: "bg-green-600",
    hoverColor: "hover:bg-green-700",
    textColor: "text-green-600",
    bgGradient: "from-green-500 to-green-700"
  }
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
  const handleSocialClick = (url: string, platform: string) => {
    // Track social media clicks
    console.log(`Clicked on ${platform}: ${url}`)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Enhanced Header Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 bg-gradient-to-br from-pink-600 via-rose-600 to-red-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full hidden md:block"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white rounded-full hidden md:block"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full hidden md:block"></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 border-2 border-white rounded-full hidden md:block"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-semibold uppercase tracking-widest mb-4 md:mb-6 rounded-full shadow-lg">
            📱 Connect With Us
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-6 md:mb-8">
            <span className="text-white">FOLLOW</span>
            <br />
            <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">OUR</span>
            <br />
            <span className="text-white">JOURNEY</span>
            <br />
            <span className="text-blue-200">ON SOCIAL MEDIA</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 text-blue-100 leading-relaxed px-2 md:px-0">
            Stay connected with Fortune Gifts Oman across all our social media platforms. 
            Get the latest updates, product launches, and exclusive offers.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">{stat.label}</div>
                <div className="text-xs text-blue-300 mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Platforms */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">OUR SOCIAL MEDIA</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Connect with us on your favorite platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {socialMediaPlatforms.map((platform) => (
              <div
                key={platform.id}
                onClick={() => handleSocialClick(platform.url, platform.name)}
                className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-gray-200 overflow-hidden"
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
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-pink-600 via-rose-600 to-red-600 text-white">
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
