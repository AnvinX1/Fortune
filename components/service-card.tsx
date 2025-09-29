"use client"

import { Check, Clock } from "lucide-react"

interface ServiceCardProps {
  service: {
    id: number
    title: string
    subtitle: string
    description: string
    features: string[]
    price: string
    duration: string
    icon: string
  }
  onGetStarted?: () => void
}

export default function ServiceCard({ service, onGetStarted }: ServiceCardProps) {
  return (
    <div className="group bg-white border-2 border-gray-200 p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
        <button
          onClick={onGetStarted}
          className="w-full bg-blue-600 text-white py-3 px-6 hover:bg-blue-700 transition-colors duration-300 uppercase tracking-widest text-sm font-semibold"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}
