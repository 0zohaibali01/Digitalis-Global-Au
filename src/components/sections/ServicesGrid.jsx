import { ArrowUpRight, Search, Target, Megaphone, MonitorSmartphone, ShoppingCart, BrushCleaning, PenTool, TrendingUp } from 'lucide-react'
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

// Map services to dynamic Bento grid spans
const getBentoSpan = (index) => {
  if (index === 0) return 'lg:col-span-8 lg:row-span-2 min-h-[420px]'
  if (index === 1) return 'lg:col-span-4 min-h-[260px]'
  if (index === 2) return 'lg:col-span-4 min-h-[260px]'
  if (index === 3) return 'lg:col-span-8 min-h-[320px]'
  return 'lg:col-span-4 min-h-[280px]'
}

export default function ServicesGrid() {
  return (
    <section id="services" className="relative bg-white px-4 py-12 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-12 max-w-3xl md:mb-16">
          <Preheading className="text-brand">Services</Preheading>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-brand sm:text-4xl md:text-5xl">
            SEO, Google Ads, web development and e-commerce in one team.
          </h2>
        </div>

        {/* Bento Box Grid Container */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 auto-rows-[minmax(220px,auto)]">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            const href = `/au/services/${service.slug}`
            const bentoSpanClass = getBentoSpan(index)
            const isLargeCard = index === 0 || index === 3

            return (
              <div
                key={service.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0C3A4C] p-7 md:p-9 text-white transition-all duration-500 border border-white/10 hover:border-cyan-400/80 hover:shadow-[0_12px_40px_rgba(34,211,238,0.25)] ${bentoSpanClass}`}
              >
                {/* Background Image */}
                {service.image ? (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    {/* Default Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C3A4C]/90 via-[#0C3A4C]/50 to-[#0C3A4C]/30 transition-opacity duration-500 group-hover:opacity-40" />
                  </div>
                ) : (
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0C3A4C] via-slate-900 to-[#0C3A4C]" />
                )}

                {/* Hover Backdrop Blur & Focus Overlay */}
                <div className="absolute inset-0 z-10 bg-[#0C3A4C]/75 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100" />

                {/* Ambient Radial Cyan Glow on Hover */}
                <div className="pointer-events-none absolute -right-12 -top-12 z-20 h-44 w-44 rounded-full bg-cyan-400/0 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/30" />

                {/* Top Action Bar (Always Visible) */}
                <div className="relative z-20 flex items-center justify-between">
                  {Icon && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0C3A4C]/80 text-cyan-300 backdrop-blur-md border border-white/10 transition-colors duration-300 group-hover:bg-cyan-400 group-hover:text-[#0C3A4C] group-hover:border-transparent">
                      <Icon className="h-6 w-6 stroke-[2]" />
                    </div>
                  )}

                  <a
                    href={href}
                    aria-label={`Learn more about ${service.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0C3A4C]/80 text-white backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:rotate-45 group-hover:bg-cyan-400 group-hover:text-[#0C3A4C] group-hover:border-transparent"
                  >
                    <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
                  </a>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-20 mt-8">
                  {/* Title (Always Visible) */}
                  <h3 className={`font-display font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 ${isLargeCard ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                    {service.title}
                  </h3>

                  {/* Description & Link: Hidden by default, reveals on hover */}
                  <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:mt-3">
                    <div className="overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <p className={`leading-relaxed text-slate-200 ${isLargeCard ? 'text-base max-w-xl' : 'text-sm'}`}>
                        {service.description}
                      </p>

                      <div className="pt-4">
                        <a
                          href={href}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-400"
                        >
                          <span>Explore Service</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}