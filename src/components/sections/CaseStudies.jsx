import { ArrowRight, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { caseStudies } from '../../data/caseStudies'
import Reveal from '../ui/Reveal'
import Preheading from '../ui/Preheading'

export default function CaseStudies() {
  // Only take the first 3 case studies for the homepage display
  const displayedStudies = caseStudies.slice(0, 3)

  return (
    <section className="bg-brand-light/30 px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <Preheading className="text-brand">Case studies</Preheading>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand md:text-5xl font-display">
              Proof that growth can be measured, not guessed.
            </h2>
          </div>
          <Link
            to="/au/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand hover:opacity-80 transition-opacity"
          >
            See all results
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid Container */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {displayedStudies.map((study) => (
            <Reveal
              key={study.slug}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/20 hover:shadow-[0_20px_40px_-15px_rgba(16,61,77,0.12)]"
            >
              {/* Top Accent Bar Animation */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Meta & Key Metric Row - Mobile Friendly Layout */}
                <div className="flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                    {study.industry}
                  </span>
                  
                  {/* Highlight Metric Badge */}
                  <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-light/80 px-3 py-1.5 text-xs font-bold text-brand ring-1 ring-inset ring-brand/10 transition-transform duration-300 group-hover:scale-105 whitespace-nowrap">
                    <TrendingUp className="h-3.5 w-3.5 shrink-0" />
                    <span>{study.metric}</span>
                  </div>
                </div>

                {/* Client Name */}
                <h3 className="mt-6 text-2xl font-bold text-brand font-display tracking-tight transition-colors group-hover:text-brand/90">
                  {study.client}
                </h3>

                {/* Summary */}
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  {study.summary}
                </p>
              </div>

              {/* Read Case Study Link */}
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <Link
                  to={`/au/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand transition-all duration-200 group-hover:gap-3"
                >
                  Read case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}