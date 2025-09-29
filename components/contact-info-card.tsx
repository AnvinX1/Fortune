import type { LucideIcon } from "lucide-react"

interface ContactInfoCardProps {
  icon: LucideIcon
  title: string
  details: string[]
  description: string
}

export default function ContactInfoCard({ icon: Icon, title, details, description }: ContactInfoCardProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="text-white" size={20} />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        {details.map((detail, idx) => (
          <p key={idx} className="text-blue-600 font-semibold">
            {detail}
          </p>
        ))}
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  )
}
