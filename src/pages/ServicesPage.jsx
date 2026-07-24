import { Helmet } from 'react-helmet-async'
import { ArrowRight, Check, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import Preheading from '../components/ui/Preheading'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Reveal from '../components/ui/Reveal'
import CTABand from '../components/sections/CTABand'
import { servicePages } from '../data/servicePageData'

const canonical = 'https://www.digitalisglobal.com/au/services'

export default function ServicesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Digitalis Global services',
    itemListElement: servicePages.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      url: `${canonical}/${service.slug}`,
    })),
  }

  return (
    <>
      <Helmet>
        <title>Digital Marketing & Web Development Services Australia | Digitalis Global</title>
        <meta name="description" content="Explore Digitalis Global's Australian SEO, Google Ads, social media, web development, e-commerce, branding, content and CRO services." />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-AU" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digital Services for Australian Businesses | Digitalis Global" />
        <meta property="og:description" content="Strategy, websites and marketing designed to move Australian businesses forward." />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="relative isolate overflow-hidden bg-brand-dark px-6 pb-20 pt-36 text-white md:px-8 md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.25),transparent_28%),radial-gradient(circle_at_15%_90%,rgba(27,90,110,0.7),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <Breadcrumbs items={[{ label: 'Services' }]} />
            <Preheading textClassName="text-cyan-200">Our services</Preheading>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-7xl">The digital disciplines that make growth easier.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">From your website to the campaigns that bring people to it, our Australian team joins up the work that moves customers from interest to action.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 md:grid-cols-2">
            {servicePages.map((service, index) => {
              const isFeatured = index % 3 === 0
              return (
                <Reveal key={service.slug} className="h-full">
                  <Link
                    to={`/au/services/${service.slug}`}
                    aria-label={`Explore ${service.title}`}
                    className={`group relative block h-full overflow-hidden rounded-3xl border p-8 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/50 md:p-10 ${
                      isFeatured
                        ? 'border-cyan-400/20 bg-brand-dark text-white hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_24px_50px_-18px_rgba(14,165,233,0.55)]'
                        : 'border-brand/10 bg-brand-light hover:-translate-y-2 hover:border-cyan-400/60 hover:bg-white hover:shadow-[0_24px_50px_-18px_rgba(16,61,77,0.25)]'
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <img src={service.image} alt="" className="h-full w-full object-cover opacity-[0.07] transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-500 group-hover:scale-150" />
                    <div className="relative flex h-full flex-col">
                      <div className="flex items-center justify-between gap-4">
                        <p className={`text-xs font-bold uppercase tracking-[0.2em] ${isFeatured ? 'text-cyan-300' : 'text-cyan-700'}`}>Digitalis Global service</p>
                        <span className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45 ${isFeatured ? 'bg-white/10 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-brand-dark' : 'bg-white text-brand shadow-sm group-hover:bg-cyan-400 group-hover:text-brand-dark'}`}>
                          <ArrowRight className="h-5 w-5" />
                        </span>
                      </div>
                      <h2 className={`mt-7 font-display text-2xl font-bold transition-colors md:text-3xl ${isFeatured ? 'text-white' : 'text-brand'}`}>{service.title}</h2>
                      <p className={`mt-4 max-w-lg leading-7 ${isFeatured ? 'text-slate-300' : 'text-neutral-600'}`}>{service.description}</p>
                      <ul className={`mt-7 space-y-2 text-sm ${isFeatured ? 'text-slate-200' : 'text-brand'}`}>
                        {service.deliverables.slice(0, 2).map((item) => (
                          <li key={item} className="flex gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <span className={`mt-8 inline-flex items-center gap-2 font-bold ${isFeatured ? 'text-cyan-300' : 'text-brand'}`}>
                        Explore service
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-light px-6 py-16 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-3xl border border-brand/10 bg-white p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-cyan-300"><Search className="h-5 w-5" /></div>
            <h2 className="mt-4 font-display text-2xl font-bold text-brand">Not sure where to begin?</h2>
            <p className="mt-2 text-neutral-600">We will help you focus on the opportunity with the clearest path to impact.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-bold text-brand">Talk through your goals <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>
      <CTABand />
    </>
  )
}
