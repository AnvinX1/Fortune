"use client"

export default function OfficeMap() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
      <iframe
        title="Fortune Office Map"
        src="https://www.google.com/maps?q=Ruwi+Muscat+Oman&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}
