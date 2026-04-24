'use client'

import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      const target = e.target as HTMLElement | null
      const clickable = target?.closest('a, button, [role="button"], .group, .cursor-pointer')
      setIsPointer(Boolean(clickable))
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Main glow cursor */}
      <div
        className="pointer-events-none fixed rounded-full bg-gradient-to-r from-secondary via-amber-300 to-primary shadow-[0_0_24px_rgba(245,158,11,0.4)]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isPointer ? '18px' : '14px',
          height: isPointer ? '18px' : '14px',
          opacity: isPointer ? 0.95 : 0.8,
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
          zIndex: 9999,
        }}
      />
      {/* Secondary glow */}
      <div
        className="pointer-events-none fixed rounded-full border-2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isPointer ? '68px' : '48px',
          height: isPointer ? '68px' : '48px',
          borderColor: isPointer ? 'rgba(14, 165, 233, 0.7)' : 'rgba(245, 158, 11, 0.45)',
          background: isPointer ? 'radial-gradient(circle, rgba(56,189,248,0.16), rgba(255,255,255,0))' : 'radial-gradient(circle, rgba(245,158,11,0.12), rgba(255,255,255,0))',
          boxShadow: isPointer ? '0 0 40px rgba(56,189,248,0.22)' : '0 0 32px rgba(245,158,11,0.16)',
          transition: 'all 0.22s ease',
          zIndex: 9998,
        }}
      />
    </>
  )
}
