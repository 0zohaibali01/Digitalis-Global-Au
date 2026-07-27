import { Helmet } from 'react-helmet-async'
import {
  ArrowRight,
  ChevronRight,
  CircleCheck,
  Compass,
  Gauge,
  Search,
} from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Accordion from '../components/ui/Accordion'
import Button from '../components/ui/Button'
import CTABand from '../components/sections/CTABand'
import Preheading from '../components/ui/Preheading'
import Reveal from '../components/ui/Reveal'
import { getServicePage, servicePages } from '../data/servicePageData'

const baseUrl = 'https://www.digitalisglobal.com/au/services'
const outcomeIcons = [Compass, Gauge, Search]

export default function ServicePage() {
  const { slug } = useParams()
  const service = getServicePage(slug)

  if (!service) return <Navigate to="/au/services" replace />

  const canonical = `${baseUrl}/${service.slug}`
  const title = `${service.title} Australia | Digitalis Global`
  const description = `${service.description} Work with Digitalis Global for ${service.title.toLowerCase()} tailored to Australian business goals.`
  const faqItems = service.faqs ? service.faqs.map(([question, answer]) => ({
    question,
    answer,
  })) : []

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${service.title} Australia`,
      description: service.description,
      url: canonical,
      image: `https://www.digitalisglobal.com${service.image}`,
      provider: {
        '@type': 'Organization',
        name: 'Digitalis Global',
        url: 'https://www.digitalisglobal.com/au',
      },
      areaServed: { '@type': 'Country', name: 'Australia' },
      serviceType: service.title,
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: service.title,
          item: canonical,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
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
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://www.digitalisglobal.com${service.image}`}
        />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary_large_image" />
        {schema.map((item, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(item)}
          </script>
        ))}
      </Helmet>

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-brand-dark px-6 pb-20 pt-32 text-white md:px-8 md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <img
            src={service.image}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/90" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(14,165,233,0.32),transparent_25%)]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-300 md:mb-12"
          >
            <Link to="/au" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/au/services" className="transition hover:text-white">
              Services
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-cyan-200">{service.title}</span>
          </nav>

          <Reveal>
            <Preheading className="text-cyan-200">
              {service.title} for Australian businesses
            </Preheading>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              {service.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
              {service.intro}
            </p>
            <div className="mt-10">
              <Button
                as={Link}
                to="/au/contact"
                variant="primary"
                className="gap-4 px-6 py-3.5"
              >
                Book a free strategy call 
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="bg-white px-6 py-20 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <Preheading>What we do</Preheading>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand md:text-5xl">
              Built around the work that creates momentum.
            </h2>
          </Reveal>

          <Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {service.deliverables?.map((item) => (
                <div
                  key={item}
                  className="flex flex-col justify-between rounded-2xl border border-brand/10 bg-brand-light p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-md"
                >
                  <CircleCheck className="h-6 w-6 shrink-0 text-cyan-600" />
                  <p className="mt-4 font-semibold leading-relaxed text-brand">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="bg-brand-light px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <Preheading>What good looks like</Preheading>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand md:text-5xl">
              A clearer route from effort to outcome.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.outcomes?.map((outcome, index) => {
              const Icon = outcomeIcons[index % outcomeIcons.length]
              return (
                <Reveal
                  key={outcome}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm border border-brand/5 transition-all hover:shadow-md"
                >
                  <Icon className="h-8 w-8 text-cyan-600" />
                  <p className="mt-6 font-display text-xl font-bold leading-snug text-brand">
                    {outcome}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-white px-6 py-20 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <Preheading>Our approach</Preheading>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand md:text-5xl">
              Practical, connected and transparent.
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-600 md:text-lg">
              Every engagement starts with your customers, commercial priorities
              and current digital reality. We then focus effort where it is most
              likely to help.
            </p>
          </Reveal>

          <Reveal className="space-y-4">
            {[
              'Understand the opportunity and baseline',
              'Prioritise the work with the strongest potential impact',
              'Build, launch and measure with clarity',
              'Keep improving what the data and customers tell us',
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-5 rounded-2xl border border-brand/10 bg-white p-6 transition-all hover:border-brand/20 hover:bg-slate-50/50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand font-bold text-cyan-300 text-sm">
                  0{index + 1}
                </span>
                <p className="pt-1 font-semibold text-brand md:text-lg">
                  {step}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-brand-light px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <Preheading>Service FAQ</Preheading>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand md:text-5xl">
              Useful answers, before we talk.
            </h2>
          </Reveal>

          <Reveal>
            <Accordion items={faqItems} />
          </Reveal>
        </div>
      </section>

      {/* Related Services Links */}
      <section className="bg-white px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
            Explore more services
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {servicePages
              .filter((item) => item.slug !== service.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  to={`/au/services/${item.slug}`}
                  className="rounded-full border border-brand/15 px-5 py-2.5 text-sm font-semibold text-brand transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-900"
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CTABand />
    </>
  )
}