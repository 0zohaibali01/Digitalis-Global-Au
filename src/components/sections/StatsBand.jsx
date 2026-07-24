import { useEffect, useRef, useState } from 'react'
import { Award, CheckCircle2, Globe2, TrendingUp } from 'lucide-react'
import { stats } from '../../data/stats'
import Reveal from '../ui/Reveal'

// Map stat labels to relevant icons
const iconMap = {
  'Projects Delivered': Award,
  'States Served': Globe2,
  'Client Satisfaction': CheckCircle2,
  'Average ROAS': TrendingUp,
}

function CountUp({ value, suffix, isVisible }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    const duration = 1800 // Animation duration in ms (1.8s)
    const target = parseFloat(value)

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const currentCount = Math.floor(easeOutCubic(progress) * target)
      setDisplayValue(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(target)
      }
    }

    const frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [value, isVisible])

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  )
}

export default function StatsBand() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Intersection Observer to trigger counting only when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Mouse move handler for dynamic radial card spotlight
  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-brand-dark px-6 py-20 text-white md:px-8 md:py-32"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = iconMap[stat.label] || Award

          return (
            <Reveal
              key={stat.label}
              onMouseMove={handleMouseMove}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:bg-white/[0.08] hover:shadow-[0_15px_30px_-10px_rgba(56,189,248,0.25)]"
            >
              {/* Cursor Spotlight Effect */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(250px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56, 189, 248, 0.15), transparent 80%)`,
                }}
              />

              {/* Bottom Glowing Accent Bar */}
              <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-accent transition-all duration-500 group-hover:w-1/2 group-hover:shadow-[0_0_12px_#38bdf8]" />

              <div className="relative z-10 flex flex-col items-center">
                {/* Stat Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-brand-dark">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Animated Stat Value */}
                <p className="font-display text-4xl font-extrabold text-white tracking-tight sm:text-5xl transition-colors duration-300 group-hover:text-accent">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </p>

                {/* Label */}
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 transition-colors duration-300 group-hover:text-white">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}