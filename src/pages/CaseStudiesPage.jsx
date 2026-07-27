import { Helmet } from 'react-helmet-async'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import CTABand from '../components/sections/CTABand'
import Preheading from '../components/ui/Preheading'
import Reveal from '../components/ui/Reveal'
import { caseStudies } from '../data/caseStudies'

const canonical = 'https://www.digitalisglobal.com/au/case-studies'

export default function CaseStudiesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Digitalis Global case studies',
    url: canonical,
    description:
      'Digital growth case studies for Australian businesses.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: caseStudies.map((study, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: study.client,
        url: `${canonical}/${study.slug}`,
      })),
    },
  }

  const features = [
    {
      icon: BarChart3,
      title: 'Measured outcomes',
      copy: 'We focus the work on commercial signals, not presentation-only metrics.',
    },
    {
      icon: CheckCircle2,
      title: 'Connected delivery',
      copy: 'Strategy, experience and acquisition work best when they inform each other.',
    },
    {
      icon: TrendingUp,
      title: 'Momentum over moments',
      copy: 'The goal is a durable growth system your team can keep building on.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>
          Digital Growth Case Studies Australia | Digitalis Global
        </title>

        <meta
          name="description"
          content="Explore Digitalis Global case studies in Australian e-commerce, health and wellness—built around measurable digital growth."
        />

        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-AU" href={canonical} />

        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Digital Growth Case Studies Australia | Digitalis Global"
        />
        <meta
          property="og:description"
          content="See how thoughtful websites, e-commerce and marketing work connect to measurable outcomes."
        />
        <meta property="og:locale" content="en_AU" />

        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-dark px-6 pt-36 pb-20 text-white md:px-8 md:pt-44 md:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(14,165,233,0.28),transparent_27%),radial-gradient(circle_at_15%_85%,rgba(27,90,110,0.7),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <Preheading textClassName="text-cyan-200">
              Case studies
            </Preheading>

            <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-7xl">
              The work is only interesting when it moves the numbers.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              A closer look at the websites, e-commerce experiences and
              performance work helping ambitious Australian brands grow with
              more clarity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white px-6 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Link
                key={study.slug}
                to={`/au/case-studies/${study.slug}`}
                className="block group"
              >
                <Reveal
                  className={`relative overflow-hidden rounded-3xl border p-8 md:p-9 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-cyan-400/60 group-hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)] ${
                    index === 0
                      ? 'border-cyan-400/30 bg-brand-dark text-white'
                      : 'border-brand/10 bg-brand-light group-hover:bg-cyan-50'
                  }`}
                >
                  {/* Animated Glow */}
                  <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/20" />

                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <p
                        className={`text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                          index === 0
                            ? 'text-cyan-300'
                            : 'text-cyan-700 group-hover:text-cyan-500'
                        }`}
                      >
                        {study.industry}
                      </p>

                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-300 ${
                          index === 0
                            ? 'bg-cyan-400/15 text-cyan-200 group-hover:bg-cyan-400 group-hover:text-slate-950'
                            : 'bg-white text-brand ring-1 ring-brand/10 group-hover:bg-cyan-400 group-hover:text-slate-950 group-hover:ring-cyan-400'
                        }`}
                      >
                        <TrendingUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
                        {study.metric}
                      </span>
                    </div>

                    <h2
                      className={`mt-7 font-display text-3xl font-bold transition-colors duration-300 ${
                        index === 0
                          ? 'text-white group-hover:text-cyan-300'
                          : 'text-brand group-hover:text-cyan-600'
                      }`}
                    >
                      {study.client}
                    </h2>

                    <p
                      className={`mt-4 leading-7 transition-colors duration-300 ${
                        index === 0
                          ? 'text-slate-300 group-hover:text-slate-200'
                          : 'text-neutral-600 group-hover:text-neutral-700'
                      }`}
                    >
                      {study.summary}
                    </p>

                    <div
                      className={`mt-8 border-t pt-6 transition-colors duration-300 ${
                        index === 0
                          ? 'border-white/10 group-hover:border-cyan-400/30'
                          : 'border-brand/10 group-hover:border-cyan-400/30'
                      }`}
                    >
                      <span
                        className={`inline-flex items-center gap-2 font-bold transition-all duration-300 ${
                          index === 0
                            ? 'text-cyan-300 group-hover:text-cyan-400'
                            : 'text-brand group-hover:text-cyan-600'
                        }`}
                      >
                        Read case study
                        <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-2 group-hover:text-cyan-400" />
                      </span>
                    </div>
                  </div>
                </Reveal>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-brand-light px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, copy }) => (
            <Reveal
              key={title}
              className="rounded-3xl bg-white p-8"
            >
              <Icon className="h-7 w-7 text-cyan-600" />

              <h2 className="mt-5 font-display text-xl font-bold text-brand">
                {title}
              </h2>

              <p className="mt-3 leading-7 text-neutral-600">
                {copy}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}