import React, { useRef, useState } from 'react'

export default function Button({
  children,
  variant = 'primary',
  className = '',
  as: Component = 'button',
  icon,
  ...props
}) {
  const buttonRef = useRef(null)
  const [fillOrigin, setFillOrigin] = useState('left')

  // Calculate mouse entry edge to start the hover fill from that direction
  const handleMouseEnter = (e) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    if (Math.abs(x) > Math.abs(y)) {
      setFillOrigin(x > 0 ? 'right' : 'left')
    } else {
      setFillOrigin(y > 0 ? 'bottom' : 'top')
    }
  }

  // Dynamic origin transform classes for smooth direction-aware filling
  const getOriginClass = () => {
    switch (fillOrigin) {
      case 'right':
        return 'origin-right scale-x-0 group-hover:scale-x-100'
      case 'top':
        return 'origin-top scale-y-0 group-hover:scale-y-100'
      case 'bottom':
        return 'origin-bottom scale-y-0 group-hover:scale-y-100'
      default:
        return 'origin-left scale-x-0 group-hover:scale-x-100'
    }
  }

  if (variant === 'primary') {
    return (
      <Component
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        className={`group relative inline-flex items-center justify-between overflow-hidden rounded-full bg-cyan-400 text-slate-950 font-bold shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.65)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 ${className}`.trim()}
        {...props}
      >
        {/* Direction-Aware Dynamic Fill Overlay */}
        <span
          className={`absolute inset-0 bg-slate-950 transition-transform duration-500 ease-out ${getOriginClass()}`}
        />

        {/* Button Label (Changes color on hover) */}
        <span className="relative z-10 transition-colors duration-300 group-hover:text-cyan-300">
          {children}
        </span>

        {/* Action Icon Badge */}
        <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-cyan-400 transition-all duration-300 group-hover:rotate-45 group-hover:bg-cyan-400 group-hover:text-slate-950">
          {icon || (
            <svg
              className="h-4 w-4 stroke-[2.5]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          )}
        </span>
      </Component>
    )
  }

  // Secondary / Outline variants fallback
  return (
    <Component
      className={`inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 font-semibold text-brand transition hover:bg-neutral-50 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}