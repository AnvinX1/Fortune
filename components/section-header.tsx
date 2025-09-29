interface SectionHeaderProps {
  title: string
  subtitle?: string
  accent?: boolean
  className?: string
}

export default function SectionHeader({ title, subtitle, accent = false, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {accent && <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>}
      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
