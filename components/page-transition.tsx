"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

export default function PageTransition({ children, className = "" }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPath, setCurrentPath] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 50)
    
    return () => clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    if (currentPath !== pathname) {
      setIsVisible(false)
      setCurrentPath(pathname)
      
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 100)
      
      return () => clearTimeout(timer)
    }
  }, [pathname, currentPath])

  return (
    <div className={`relative ${className}`}>
      <div 
        className={`transition-all duration-700 ease-out ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-6"
        }`}
      >
        {children}
      </div>
    </div>
  )
}
