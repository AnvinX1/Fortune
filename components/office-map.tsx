"use client"

import dynamic from 'next/dynamic'

// Simple map placeholder component
export default function OfficeMap() {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-blue-800 mb-2">Interactive Map</h3>
        <p className="text-blue-600 mb-4">Click to view our locations on Google Maps</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={() => window.open('https://www.google.com/maps/search/Al+Khuwair+Commercial+Complex+Muscat+Oman', '_blank')}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
          >
            View Muscat Office
          </button>
          <button 
            onClick={() => window.open('https://www.google.com/maps/search/Al+Dahariz+Commercial+Area+Salalah+Oman', '_blank')}
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors font-semibold"
          >
            View Salalah Office
          </button>
          <button 
            onClick={() => window.open('https://www.google.com/maps/search/Sohar+Industrial+Port+Area+Oman', '_blank')}
            className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors font-semibold"
          >
            View Sohar Office
          </button>
        </div>
      </div>
    </div>
  )
}
