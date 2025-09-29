import { Star } from "lucide-react"

interface TestimonialCardProps {
  testimonial: {
    name: string
    position: string
    company?: string
    content: string
    rating: number
  }
  className?: string
}

export default function TestimonialCard({ testimonial, className = "" }: TestimonialCardProps) {
  return (
    <div
      className={`bg-white p-8 border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
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
          {testimonial.company && <p className="text-sm text-blue-600 font-semibold">{testimonial.company}</p>}
        </div>
      </div>
    </div>
  )
}
