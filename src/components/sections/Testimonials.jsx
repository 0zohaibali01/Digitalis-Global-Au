import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Star, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import Preheading from '../ui/Preheading' // Adjust the relative path to match your folder structure

export default function Testimonials() {
  const containerRef = useRef(null)
  const scrollRef = useRef(null)
  
  const [isHovered, setIsHovered] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [direction, setDirection] = useState('none') // 'left' | 'right' | 'none'
  
  const startX = useRef(0)
  const scrollLeftPos = useRef(0)

  // Fluid Physics Spring Setup
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  
  // Smooth springs eliminate mouse tracking jitter
  const smoothX = useSpring(mouseX, { stiffness: 250, damping: 25, mass: 0.5 })
  const smoothY = useSpring(mouseY, { stiffness: 250, damping: 25, mass: 0.5 })

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    
    // Update raw motion values directly without triggering React re-renders
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)

    // Handle Dragging Scroll
    if (isMouseDown && scrollRef.current) {
      e.preventDefault()
      const deltaX = e.clientX - startX.current
      scrollRef.current.scrollLeft = scrollLeftPos.current - deltaX * 1.2

      // Threshold check for arrow direction
      if (deltaX < -10 && direction !== 'right') {
        setDirection('right')
      } else if (deltaX > 10 && direction !== 'left') {
        setDirection('left')
      }
    }
  }

  const handleMouseDown = (e) => {
    setIsMouseDown(true)
    if (scrollRef.current) {
      startX.current = e.clientX
      scrollLeftPos.current = scrollRef.current.scrollLeft
    }
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
    setDirection('none')
  }

  return (
    <section className="bg-white px-6 py-20 md:px-8 md:py-32 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl">
          <Preheading className="text-brand">Testimonials</Preheading>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand md:text-5xl">
            What Australian business owners say after the build.
          </h2>
          <p className="mt-4 text-neutral-500 text-sm md:text-base">
            Drag or swipe horizontally to explore all client reviews.
          </p>
        </div>

        {/* Custom Interactive Scroll Track */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            handleMouseUp()
          }}
          className="relative mt-12 cursor-none"
        >
          {/* Fluid Glass Bubble Cursor */}
          {isHovered && (
            <motion.div
              style={{
                x: smoothX,
                y: smoothY,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isMouseDown ? 1.15 : 1,
                opacity: 1,
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="pointer-events-none absolute -left-8 -top-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/90 text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.4)] backdrop-blur-md border border-white/50"
            >
              {/* Dynamic Arrow States */}
              {direction === 'left' && (
                <ArrowLeft className="h-6 w-6 stroke-[2.5] text-slate-950" />
              )}
              {direction === 'right' && (
                <ArrowRight className="h-6 w-6 stroke-[2.5] text-slate-950" />
              )}
              {direction === 'none' && (
                <div className="flex items-center gap-1">
                  <ArrowLeft className="h-3.5 w-3.5 stroke-[2.5]" />
                  <Sparkles className="h-3 w-3 fill-slate-950" />
                  <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
              )}
            </motion.div>
          )}

          {/* Cards Container with Snap Mechanics */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto py-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
              >
                <div className="group relative h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl">
                  {/* Decorative Quote */}
                  <span className="pointer-events-none absolute right-6 top-2 text-8xl font-serif text-brand/5 transition-all duration-300 group-hover:text-cyan-500/10">
                    “
                  </span>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Rating Stars */}
                      <div className="flex gap-1 text-cyan-500">
                        {Array.from({ length: item.rating }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="h-5 w-5 fill-current"
                          />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p className="mt-6 text-lg leading-8 text-neutral-600">
                        “{item.quote}”
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="mt-8 pt-4 border-t border-neutral-100">
                      <p className="font-semibold text-brand">{item.name}</p>
                      <p className="text-sm text-neutral-600">{item.company}</p>
                      <p className="text-sm text-neutral-400">{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}