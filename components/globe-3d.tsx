"use client"

import { useEffect, useRef, useState } from 'react'

// 3D Geodesic Sphere with Triangular Faces and Icons
export default function Globe3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size with high DPI support
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const centerX = canvas.width / 2 / (window.devicePixelRatio || 1)
    const centerY = canvas.height / 2 / (window.devicePixelRatio || 1)
    const radius = Math.min(centerX, centerY) * 0.9

    // Generate geodesic sphere vertices (icosahedron subdivision)
    const phi = (1 + Math.sqrt(5)) / 2 // Golden ratio
    
    // Icosahedron vertices
    const icosahedronVertices = [
      [0, 1, phi], [0, -1, phi], [0, 1, -phi], [0, -1, -phi],
      [1, phi, 0], [-1, phi, 0], [1, -phi, 0], [-1, -phi, 0],
      [phi, 0, 1], [-phi, 0, 1], [phi, 0, -1], [-phi, 0, -1]
    ]

    // Normalize vertices
    const vertices = icosahedronVertices.map(([x, y, z]) => {
      const length = Math.sqrt(x * x + y * y + z * z)
      return [x / length, y / length, z / length]
    })

    // Icosahedron faces (triangles)
    const triangles = [
      [0, 1, 8], [0, 8, 4], [0, 4, 9], [0, 9, 5], [0, 5, 1],
      [1, 5, 10], [1, 10, 6], [1, 6, 8], [8, 6, 2], [8, 2, 4],
      [4, 2, 11], [4, 11, 9], [9, 11, 7], [9, 7, 5], [5, 7, 10],
      [6, 10, 3], [6, 3, 2], [2, 3, 11], [11, 3, 7], [7, 3, 10]
    ]

    // Create triangular faces with enhanced icons
    const faces = triangles.map((triangle, index) => {
      const [i1, i2, i3] = triangle
      const v1 = vertices[i1]
      const v2 = vertices[i2]
      const v3 = vertices[i3]
      
      // Calculate face center
      const centerX = (v1[0] + v2[0] + v3[0]) / 3
      const centerY = (v1[1] + v2[1] + v3[1]) / 3
      const centerZ = (v1[2] + v2[2] + v3[2]) / 3
      const centerLength = Math.sqrt(centerX * centerX + centerY * centerY + centerZ * centerZ)
      
      return {
        vertices: [v1, v2, v3],
        center: [
          centerX / centerLength,
          centerY / centerLength,
          centerZ / centerLength
        ],
        hasIcon: index % 3 === 0, // Every 3rd face has Fortune logo
        hasUserIcon: index % 5 === 1, // Every 5th face has user icon
        hasStarIcon: index % 7 === 2, // Every 7th face has star icon
        hasNetworkIcon: index % 4 === 3, // Every 4th face has network icon
        originalCenter: [
          centerX / centerLength,
          centerY / centerLength,
          centerZ / centerLength
        ],
        rotation: Math.random() * Math.PI * 2,
        pulsePhase: Math.random() * Math.PI * 2
      }
    })

    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.005

      // Update face positions with 3D rotation
      const rotatedFaces = faces.map(face => {
        const [cx, cy, cz] = face.originalCenter
        
        // Rotate around Y axis
        const rotatedX = cx * Math.cos(time * 0.3) - cz * Math.sin(time * 0.3)
        const rotatedZ = cx * Math.sin(time * 0.3) + cz * Math.cos(time * 0.3)
        
        // Rotate around X axis
        const finalY = cy * Math.cos(time * 0.2) - rotatedZ * Math.sin(time * 0.2)
        const finalZ = cy * Math.sin(time * 0.2) + rotatedZ * Math.cos(time * 0.2)
        
        return {
          ...face,
          center: [rotatedX, finalY, finalZ]
        }
      })

      // Sort faces by Z for depth rendering
      const sortedFaces = rotatedFaces.sort((a, b) => b.center[2] - a.center[2])

      // Draw nodes instead of triangular faces (Obsidian-style)
      sortedFaces.forEach((face, index) => {
        const [cx, cy, cz] = face.center
        const scale = 250 / (250 + cz)
        const x2d = centerX + cx * radius * scale
        const y2d = centerY + cy * radius * scale
        
        // Draw all nodes regardless of position
        {
          ctx.save()
          ctx.translate(x2d, y2d)
          
          // Enhanced lighting based on node orientation
          const lightIntensity = Math.max(0.4, Math.min(1, cz + 0.8))
          const pulseIntensity = 0.8 + 0.2 * Math.sin(time * 2 + face.pulsePhase)
          ctx.globalAlpha = Math.max(0.3, scale * lightIntensity * pulseIntensity)

          // Draw node with gradient effect (circular like Obsidian)
          const nodeSize = 16 * scale
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, nodeSize)
          gradient.addColorStop(0, '#FFFFFF')
          gradient.addColorStop(0.3, '#E0F2FE')
          gradient.addColorStop(0.7, '#3B82F6')
          gradient.addColorStop(1, '#1E40AF')
          
          ctx.fillStyle = gradient
          ctx.shadowColor = '#3B82F6'
          ctx.shadowBlur = 8
          ctx.beginPath()
          ctx.arc(0, 0, nodeSize, 0, Math.PI * 2)
          ctx.fill()

          // Outer ring for depth
          ctx.strokeStyle = '#1E40AF'
          ctx.lineWidth = 1.5
          ctx.shadowColor = '#1E40AF'
          ctx.shadowBlur = 4
          ctx.beginPath()
          ctx.arc(0, 0, nodeSize + 2, 0, Math.PI * 2)
          ctx.stroke()

          // Inner highlight
          ctx.fillStyle = '#FFFFFF'
          ctx.globalAlpha = Math.max(0.2, scale * 0.6)
          ctx.beginPath()
          ctx.arc(0, 0, nodeSize * 0.4, 0, Math.PI * 2)
          ctx.fill()

          ctx.shadowBlur = 0

          // Draw small icons on some nodes
          if (face.hasIcon) {
            // Draw Fortune logo
            ctx.fillStyle = '#1E40AF'
            ctx.font = `bold ${nodeSize * 0.6}px Arial`
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText('F', 0, 0)
          } else if (face.hasUserIcon) {
            // Draw user icon
            ctx.fillStyle = '#1E40AF'
            ctx.beginPath()
            // Head
            ctx.arc(0, -nodeSize * 0.3, nodeSize * 0.2, 0, Math.PI * 2)
            ctx.fill()
            // Body
            ctx.beginPath()
            ctx.moveTo(0, -nodeSize * 0.1)
            ctx.lineTo(0, nodeSize * 0.4)
            ctx.lineWidth = nodeSize * 0.15
            ctx.stroke()
            // Arms
            ctx.beginPath()
            ctx.moveTo(0, nodeSize * 0.1)
            ctx.lineTo(-nodeSize * 0.2, nodeSize * 0.3)
            ctx.moveTo(0, nodeSize * 0.1)
            ctx.lineTo(nodeSize * 0.2, nodeSize * 0.3)
            ctx.lineWidth = nodeSize * 0.1
            ctx.stroke()
          }

          ctx.restore()
        }
      })

      // Draw ALL connections - icosahedron edges + internal face connections
      
      // 1. Draw icosahedron edges (outer structure)
      const edges = [
        // Edges from the icosahedron structure
        [0, 1], [0, 4], [0, 5], [0, 8], [0, 9],
        [1, 5], [1, 6], [1, 8], [1, 10],
        [2, 3], [2, 4], [2, 6], [2, 8], [2, 11],
        [3, 6], [3, 7], [3, 10], [3, 11],
        [4, 8], [4, 9], [4, 11],
        [5, 7], [5, 9], [5, 10],
        [6, 8], [6, 10],
        [7, 9], [7, 10], [7, 11],
        [8, 9],
        [9, 11],
        [10, 11]
      ]

      // Draw icosahedron edges
      edges.forEach(([i, j]) => {
        const [x1, y1, z1] = vertices[i]
        const [x2, y2, z2] = vertices[j]
        
        // Rotate vertices
        const rot1X = x1 * Math.cos(time * 0.3) - z1 * Math.sin(time * 0.3)
        const rot1Z = x1 * Math.sin(time * 0.3) + z1 * Math.cos(time * 0.3)
        const rot1Y = y1 * Math.cos(time * 0.2) - rot1Z * Math.sin(time * 0.2)
        const final1Z = y1 * Math.sin(time * 0.2) + rot1Z * Math.cos(time * 0.2)
        
        const rot2X = x2 * Math.cos(time * 0.3) - z2 * Math.sin(time * 0.3)
        const rot2Z = x2 * Math.sin(time * 0.3) + z2 * Math.cos(time * 0.3)
        const rot2Y = y2 * Math.cos(time * 0.2) - rot2Z * Math.sin(time * 0.2)
        const final2Z = y2 * Math.sin(time * 0.2) + rot2Z * Math.cos(time * 0.2)
        
        const scale1 = 250 / (250 + final1Z)
        const scale2 = 250 / (250 + final2Z)
        
        const x1_2d = centerX + rot1X * radius * scale1
        const y1_2d = centerY + rot1Y * radius * scale1
        const x2_2d = centerX + rot2X * radius * scale2
        const y2_2d = centerY + rot2Y * radius * scale2
        
        // Draw all edges regardless of visibility for full connectivity
        const distance = Math.sqrt((x1_2d - x2_2d) ** 2 + (y1_2d - y2_2d) ** 2)
        const lineOpacity = Math.max(0.3, 1 - distance / 300) * 0.8
        
        // Create animated line with pulse effect
        const pulse = 0.9 + 0.1 * Math.sin(time * 1.5 + i * 0.2)
        
        ctx.globalAlpha = lineOpacity * pulse
        ctx.strokeStyle = '#3B82F6'
        ctx.lineWidth = 2
        ctx.shadowColor = '#3B82F6'
        ctx.shadowBlur = 3
        
        ctx.beginPath()
        ctx.moveTo(x1_2d, y1_2d)
        ctx.lineTo(x2_2d, y2_2d)
        ctx.stroke()
        
        ctx.shadowBlur = 0
      })

      // Draw vertex nodes (main connection points)
      vertices.forEach((vertex, vertexIndex) => {
        const [vx, vy, vz] = vertex
        
        // Rotate vertex
        const vrotX = vx * Math.cos(time * 0.3) - vz * Math.sin(time * 0.3)
        const vrotZ = vx * Math.sin(time * 0.3) + vz * Math.cos(time * 0.3)
        const vrotY = vy * Math.cos(time * 0.2) - vrotZ * Math.sin(time * 0.2)
        const vfinalZ = vy * Math.sin(time * 0.2) + vrotZ * Math.cos(time * 0.2)
        
        const vscale = 250 / (250 + vfinalZ)
        const vx2d = centerX + vrotX * radius * vscale
        const vy2d = centerY + vrotY * radius * vscale
        
        // Draw all vertex nodes regardless of position
        {
          ctx.save()
          ctx.translate(vx2d, vy2d)
          
          // Enhanced vertex node
          const vertexSize = 12 * vscale
          const lightIntensity = Math.max(0.6, Math.min(1, vfinalZ + 0.8))
          const pulseIntensity = 0.9 + 0.1 * Math.sin(time * 3 + vertexIndex * 0.5)
          
          ctx.globalAlpha = lightIntensity * pulseIntensity
          
          // Main vertex node with gradient
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, vertexSize)
          gradient.addColorStop(0, '#FFFFFF')
          gradient.addColorStop(0.4, '#3B82F6')
          gradient.addColorStop(1, '#1E40AF')
          
          ctx.fillStyle = gradient
          ctx.shadowColor = '#3B82F6'
          ctx.shadowBlur = 6
          ctx.beginPath()
          ctx.arc(0, 0, vertexSize, 0, Math.PI * 2)
          ctx.fill()
          
          // Outer glow ring
          ctx.strokeStyle = '#60A5FA'
          ctx.lineWidth = 2
          ctx.shadowColor = '#60A5FA'
          ctx.shadowBlur = 4
          ctx.beginPath()
          ctx.arc(0, 0, vertexSize + 1, 0, Math.PI * 2)
          ctx.stroke()
          
          // Inner highlight
          ctx.fillStyle = '#FFFFFF'
          ctx.globalAlpha = lightIntensity * 0.8
          ctx.beginPath()
          ctx.arc(0, 0, vertexSize * 0.5, 0, Math.PI * 2)
          ctx.fill()
          
          ctx.shadowBlur = 0
          ctx.restore()
        }
      })

      // 2. Draw connections from face centers to vertices
      faces.forEach((face, faceIndex) => {
        const [fx, fy, fz] = face.center
        
        // Rotate face center
        const frotX = fx * Math.cos(time * 0.3) - fz * Math.sin(time * 0.3)
        const frotZ = fx * Math.sin(time * 0.3) + fz * Math.cos(time * 0.3)
        const frotY = fy * Math.cos(time * 0.2) - frotZ * Math.sin(time * 0.2)
        const ffinalZ = fy * Math.sin(time * 0.2) + frotZ * Math.cos(time * 0.2)
        
        const fscale = 250 / (250 + ffinalZ)
        const fx2d = centerX + frotX * radius * fscale
        const fy2d = centerY + frotY * radius * fscale
        
        // Connect face center to each of its 3 vertices
        face.vertices.forEach((vertex, vertexIndex) => {
          const [vx, vy, vz] = vertex
          
          // Rotate vertex
          const vrotX = vx * Math.cos(time * 0.3) - vz * Math.sin(time * 0.3)
          const vrotZ = vx * Math.sin(time * 0.3) + vz * Math.cos(time * 0.3)
          const vrotY = vy * Math.cos(time * 0.2) - vrotZ * Math.sin(time * 0.2)
          const vfinalZ = vy * Math.sin(time * 0.2) + vrotZ * Math.cos(time * 0.2)
          
          const vscale = 250 / (250 + vfinalZ)
          const vx2d = centerX + vrotX * radius * vscale
          const vy2d = centerY + vrotY * radius * vscale
          
          // Draw internal connection lines
          const distance = Math.sqrt((fx2d - vx2d) ** 2 + (fy2d - vy2d) ** 2)
          const lineOpacity = Math.max(0.3, 1 - distance / 200) * 0.7
          
          const pulse = 0.8 + 0.2 * Math.sin(time * 2 + faceIndex * 0.3 + vertexIndex * 0.1)
          
          ctx.globalAlpha = lineOpacity * pulse
          ctx.strokeStyle = '#60A5FA'
          ctx.lineWidth = 1.5
          ctx.shadowColor = '#60A5FA'
          ctx.shadowBlur = 2
          
          ctx.beginPath()
          ctx.moveTo(fx2d, fy2d)
          ctx.lineTo(vx2d, vy2d)
          ctx.stroke()
          
          ctx.shadowBlur = 0
        })
      })

      // 3. Draw additional cross-connections between face centers
      faces.forEach((face1, i) => {
        faces.forEach((face2, j) => {
          if (i < j) {
            // Check if faces share a vertex (are adjacent)
            const sharesVertex = face1.vertices.some(v1 => 
              face2.vertices.some(v2 => 
                v1[0] === v2[0] && v1[1] === v2[1] && v1[2] === v2[2]
              )
            )
            
            if (sharesVertex) {
              const [fx1, fy1, fz1] = face1.center
              const [fx2, fy2, fz2] = face2.center
              
              // Rotate face centers
              const f1rotX = fx1 * Math.cos(time * 0.3) - fz1 * Math.sin(time * 0.3)
              const f1rotZ = fx1 * Math.sin(time * 0.3) + fz1 * Math.cos(time * 0.3)
              const f1rotY = fy1 * Math.cos(time * 0.2) - f1rotZ * Math.sin(time * 0.2)
              const f1finalZ = fy1 * Math.sin(time * 0.2) + f1rotZ * Math.cos(time * 0.2)
              
              const f2rotX = fx2 * Math.cos(time * 0.3) - fz2 * Math.sin(time * 0.3)
              const f2rotZ = fx2 * Math.sin(time * 0.3) + fz2 * Math.cos(time * 0.3)
              const f2rotY = fy2 * Math.cos(time * 0.2) - f2rotZ * Math.sin(time * 0.2)
              const f2finalZ = fy2 * Math.sin(time * 0.2) + f2rotZ * Math.cos(time * 0.2)
              
              const f1scale = 250 / (250 + f1finalZ)
              const f2scale = 250 / (250 + f2finalZ)
              
              const f1x2d = centerX + f1rotX * radius * f1scale
              const f1y2d = centerY + f1rotY * radius * f1scale
              const f2x2d = centerX + f2rotX * radius * f2scale
              const f2y2d = centerY + f2rotY * radius * f2scale
              
              // Draw cross-connection between adjacent faces
              const distance = Math.sqrt((f1x2d - f2x2d) ** 2 + (f1y2d - f2y2d) ** 2)
              const lineOpacity = Math.max(0.15, 1 - distance / 250) * 0.5
              
              const pulse = 0.7 + 0.3 * Math.sin(time * 1.8 + i * 0.2 + j * 0.1)
              
              ctx.globalAlpha = lineOpacity * pulse
              ctx.strokeStyle = '#93C5FD'
              ctx.lineWidth = 1
              ctx.shadowColor = '#93C5FD'
              ctx.shadowBlur = 1
              
              ctx.beginPath()
              ctx.moveTo(f1x2d, f1y2d)
              ctx.lineTo(f2x2d, f2y2d)
              ctx.stroke()
              
              ctx.shadowBlur = 0
            }
          }
        })
      })


      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation after a delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
      animate()
    }, 500)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] xl:w-[40rem] xl:h-[40rem]">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ background: 'transparent' }}
        />
        
        {/* Loading overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-blue-600 rounded-full">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Minimal floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        </div>
      </div>
    </div>
  )
}
