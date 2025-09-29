interface PageHeaderProps {
  title: string
  subtitle: string
  className?: string
}

export default function PageHeader({ title, subtitle, className = "" }: PageHeaderProps) {
  return (
    <section className={`pt-32 pb-12 px-4 md:px-8 bg-blue-600 text-white ${className}`}>
      <div className="container mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">{title}</h1>
        <p className="text-xl max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  )
}
