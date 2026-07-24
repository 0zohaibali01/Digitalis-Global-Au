import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ArrowUpRight, Search, Target, Megaphone, MonitorSmartphone, ShoppingCart, BrushCleaning, PenTool, TrendingUp } from 'lucide-react'
import { services } from '../../data/services'
import Preheading from '../ui/Preheading'

const iconMap = {
  Search,
  Target,
  Megaphone,
  MonitorSmartphone,
  ShoppingCart,
  BrushCleaning,
  PenTool,
  TrendingUp,
}

export default function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRefs = useRef([])

  // Only run scroll observer on desktop screens where scrolling cards exist
  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches
    if (!isDesktop) return

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.2,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'))
          setActiveIndex(index)
        }
      })
    }, observerOptions)

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const handleSelect = (index) => {
    setActiveIndex(index)
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches
    if (isDesktop) {
      cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section id="services" className="relative bg-white px-4 py-12 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl mb-8 md:mb-16">
          <Preheading className="text-brand">Services</Preheading>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-brand sm:text-4xl md:text-5xl font-display">
            SEO, Google Ads, web development and e-commerce in one team.
          </h2>
        </div>

        {/* MOBILE & TABLET VIEW (Single Selected Card Tab View) */}
        <div className="block lg:hidden">
          {/* Scrollable Pills Bar */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none">
            {services.map((service, index) => {
              const isActive = activeIndex === index
              return (
                <button
                  key={service.title}
                  onClick={() => handleSelect(index)}
                  className={`shrink-0 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#0C3A4C] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 active:bg-slate-200'
                  }`}
                >
                  {service.title}
                </button>
              )
            })}
          </div>

          {/* Active Mobile Card */}
          {(() => {
            const service = services[activeIndex]
            const Icon = iconMap[service.icon]
            const href = "/au/services/" + service.slug

            return (
              <div className="relative mt-2 overflow-hidden rounded-2xl bg-[#0C3A4C] p-6 text-white border-2 border-cyan-400/80 shadow-xl">
                {service.image && (
                  <div className="absolute inset-0 z-0 opacity-20">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C3A4C] via-[#0C3A4C]/80 to-transparent" />
                  </div>
                )}

                <div className="relative z-10 flex items-center justify-between">
                  {Icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-[#0C3A4C]">
                      <Icon className="h-5 w-5" />
                    </div>
                  )}

                  <a
                    href={href}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md"
                  >
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                  </a>
                </div>

                <div className="relative z-10 mt-6 space-y-2">
                  <h3 className="text-xl font-bold font-display">{service.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-300">{service.description}</p>

                  <div className="pt-3">
                    <a
                      href={href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400"
                    >
                      <span>Explore Service</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })()}
        </div>

        {/* DESKTOP VIEW (Sticky Scroll Layout) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Left Sticky Nav */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="space-y-2">
              {services.map((service, index) => {
                const isActive = activeIndex === index

                return (
                  <button
                    key={service.title}
                    onClick={() => handleSelect(index)}
                    className={`group flex w-full items-center gap-3.5 rounded-2xl p-3.5 text-left transition-all duration-200 ${
                      isActive
                        ? 'bg-[#0C3A4C] text-white shadow-md shadow-[#0C3A4C]/20'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-cyan-400 text-[#0C3A4C] translate-x-1'
                          : 'bg-transparent text-slate-400 group-hover:text-slate-950'
                      }`}
                    >
                      <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                    </div>

                    <span
                      className={`text-base font-bold font-display transition-transform duration-200 ${
                        isActive ? 'text-white translate-x-1' : ''
                      }`}
                    >
                      {service.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="lg:col-span-7 space-y-12">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon]
              const href = "/au/services/" + service.slug
              const isActive = activeIndex === index

              return (
                <div
                  key={service.title}
                  data-index={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0C3A4C] p-10 min-h-[380px] transition-all duration-300 transform-gpu ${
                    isActive
                      ? 'border-2 border-cyan-400/80 shadow-[0_12px_40px_rgba(34,211,238,0.2)] opacity-100'
                      : 'border border-white/10 opacity-50'
                  }`}
                >
                  {service.image ? (
                    <div className="absolute inset-0 z-0 overflow-hidden opacity-25">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C3A4C] via-[#0C3A4C]/80 to-transparent" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0C3A4C] via-slate-900 to-[#0C3A4C]" />
                  )}

                  <div className="relative z-10 flex items-center justify-between">
                    {Icon && (
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-200 ${
                        isActive ? 'bg-cyan-400 text-[#0C3A4C]' : 'bg-white/10 text-cyan-400'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    )}

                    <a
                      href={href}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-200 group-hover:bg-cyan-400 group-hover:text-[#0C3A4C] group-hover:rotate-45"
                    >
                      <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
                    </a>
                  </div>

                  <div className="relative z-10 mt-12 space-y-3">
                    <h3 className="text-3xl font-bold tracking-tight text-white font-display">
                      {service.title}
                    </h3>

                    <p className="text-base leading-relaxed text-slate-300 max-w-xl">
                      {service.description}
                    </p>

                    <a
                      href={href}
                      className="inline-flex items-center gap-2 pt-2 text-xs font-bold uppercase tracking-wider text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                      <span>Explore Service</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
