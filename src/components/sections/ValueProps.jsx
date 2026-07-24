import { ArrowRight, BarChart3, Globe2, Layers3, Sparkles } from 'lucide-react'
import MagicBento from '../../component/MagicBento'
import Preheading from '../ui/Preheading'

const items = [
  {
    title: 'Radical Transparency',
    description: 'Weekly reporting, live dashboards and direct Slack access keep every move visible.',
    icon: BarChart3,
  },
  {
    title: 'Local Market Fluency, Global Capability',
    description: 'We understand Australian consumer behaviour and compliance while operating with a global-standard studio approach.',
    icon: Globe2,
  },
  {
    title: 'One Team, Every Discipline',
    description: 'Strategy, design, development, SEO, ads and video all live in-house, with no handoffs to third parties.',
    icon: Layers3,
  },
  {
    title: 'Results or We Iterate',
    description: 'We optimise for rankings, revenue and ROAS so every campaign stays focused on business growth.',
    icon: Sparkles,
  },
]

export default function ValueProps() {
  return (
    <section className="bg-brand-light px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Preheading>Why Australian brands choose us</Preheading>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand md:text-5xl font-display">
            A modern agency model built for growth, not vanity.
          </h2>
        </div>

        <div className="mt-12">
          <MagicBento
            cardsData={items.map(item => ({ ...item, color: '#ffffff' }))} // White background cards
            glowColor="16, 61, 77" // Brand teal glow
            enableTilt={true}
            enableMagnetism={true}
            renderCardContent={(item) => {
              const Icon = item.icon
              return (
                <div className="flex flex-col justify-between h-full w-full group">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-brand font-display">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                  
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all group-hover:translate-x-1"
                  >
                    See how we work <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              )
            }}
          />
        </div>
      </div>
    </section>
  )
}