import { Helmet } from 'react-helmet-async'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Button from '../components/ui/Button'
import CTABand from '../components/sections/CTABand'
import Preheading from '../components/ui/Preheading'
import Reveal from '../components/ui/Reveal'
import { useCaseStudy, useCaseStudies } from '../hooks/useCaseStudies'

const baseUrl = 'https://www.digitalisglobal.com/au/case-studies'

export default function CaseStudyPage() {
  const { slug } = useParams()
  const { caseStudy: study, loading, notFound, error } = useCaseStudy(slug)
  const { caseStudies } = useCaseStudies()

  if (notFound) return <Navigate to="/au/case-studies" replace />

  if (loading) {
    return (
      <section className="bg-brand-dark px-6 pb-20 pt-32 text-white md:px-8 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl animate-pulse">
          <div className="h-4 w-40 rounded bg-white/10" />
          <div className="mt-8 h-12 w-2/3 rounded bg-white/10" />
          <div className="mt-4 h-12 w-1/2 rounded bg-white/10" />
          <div className="mt-8 h-6 w-1/3 rounded bg-white/10" />
        </div>
      </section>
    )
  }

  if (error || !study) {
    return (
      <section className="bg-white px-6 py-32 text-center md:px-8">
        <p className="text-lg font-semibold text-brand">
          We couldn't load this case study right now.
        </p>
        <p className="mt-2 text-neutral-600">Please try again shortly.</p>
        <Link
          to="/au/case-studies"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-700"
        >
          Back to case studies <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    )
  }

  const canonical = `${baseUrl}/${study.slug}`
  const title = `${study.client} Case Study | Digitalis Global Australia`
  const description = `${study.client}: ${study.summary} Read the Digitalis Global Australian case study.`
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${study.client} case study`,
      description,
      mainEntityOfPage: canonical,
      author: { '@type': 'Organization', name: 'Digitalis Global' },
      publisher: {
        '@type': 'Organization',
        name: 'Digitalis Global',
        url: 'https://www.digitalisglobal.com/au',
      },
      about: { '@type': 'Thing', name: study.industry },
      keywords: study.services.join(', '),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.digitalisglobal.com/au',
        },
        { '@type': 'ListItem', position: 2, name: 'Case studies', item: baseUrl },
        { '@type': 'ListItem', position: 3, name: study.client, item: canonical },
      ],
    },
  ]

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-AU" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={canonical} />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary_large_image" />
        {schema.map((item, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(item)}
          </script>
        ))}
      </Helmet>

      <section className="relative isolate overflow-hidden bg-brand-dark px-6 pb-20 pt-32 text-white md:px-8 md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_25%,rgba(14,165,233,0.3),transparent_28%),radial-gradient(circle_at_12%_86%,rgba(27,90,110,0.72),transparent_36%)]" />
        <div className="relative mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-9 flex flex-wrap items-center gap-2 text-sm text-slate-300"
          >
            <Link to="/au" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/au/case-studies" className="hover:text-white">
              Case studies
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-cyan-200">{study.client}</span>
          </nav>
          <Reveal>
            <Preheading textClassName="text-cyan-200">
              {study.industry}
            </Preheading>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-7xl">
              {study.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-xl text-slate-200">
              {study.client}
            </p>
            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-5 py-4">
              <span className="text-sm font-semibold text-cyan-100">
                Reported outcome
              </span>
              <span className="font-display text-2xl font-extrabold text-cyan-300">
                {study.metric}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Preheading>The challenge</Preheading>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand md:text-5xl">
              A digital experience with more to do.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-xl leading-9 text-neutral-700">
              {study.challenge}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {study.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand"
                >
                  {service}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-light px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <Preheading>Our approach</Preheading>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand md:text-5xl">
              Making the important moments work together.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {study.approach.map((item, index) => (
              <Reveal key={item} className="rounded-3xl bg-white p-8">
                <span className="font-display text-4xl font-extrabold text-cyan-500">
                  0{index + 1}
                </span>
                <p className="mt-7 font-semibold leading-7 text-brand">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark px-6 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Preheading textClassName="text-cyan-200">The outcome</Preheading>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight md:text-5xl">
              Results that show what a more connected digital system can do.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {study.results.map(([number, label]) => (
              <Reveal
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-8"
              >
                <p className="font-display text-4xl font-extrabold text-cyan-300 md:text-5xl">
                  {number}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  {label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl border border-brand/10 bg-brand-light p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
              Your next chapter
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-brand">
              Ready to make your digital work work harder?
            </h2>
          </div>
          <Button
            as="a"
            href="#contact"
            variant="primary"
            className="gap-3 px-6 py-3.5"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {caseStudies.length > 0 && (
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-brand">
                More Case Studies
              </h3>
            </div>
            <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies
                .filter((item) => item.slug !== study.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    to={`/au/case-studies/${item.slug}`}
                    className="group flex flex-col justify-between rounded-3xl border border-brand/10 bg-brand-light/60 p-8 transition hover:border-cyan-400 hover:bg-brand-light"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-800">
                          {item.industry}
                        </span>
                        {item.metric && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand shadow-sm">
                            {item.metric}
                          </span>
                        )}
                      </div>
                      <h4 className="mt-4 font-display text-2xl font-bold text-brand group-hover:text-cyan-700">
                        {item.client}
                      </h4>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-600">
                        {item.summary}
                      </p>
                    </div>
                    <div className="mt-8 pt-4 flex items-center gap-2 text-sm font-semibold text-brand group-hover:text-cyan-700">
                      Read case study{' '}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </section>

      <CTABand />
    </>
  )
}