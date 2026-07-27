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
            <Preheading textClassName="text-cyan-400">Our services</Preheading>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-7xl">The digital disciplines that make growth easier.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">From your website to the campaigns that bring people to it, our Australian team joins up the work that moves customers from interest to action.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {servicePages.map((service) => (
              <Reveal key={service.slug} className="h-full">
                <Link
                  to={`/au/services/${service.slug}`}
                  aria-label={`Explore ${service.title}`}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(12,58,76,0.08)]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <img src={service.image} alt="" className="h-full w-full object-cover opacity-[0.04] transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">Digitalis Global Capability</span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-brand transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-brand group-hover:rotate-45 shadow-sm">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </div>

                    <h2 className="mt-6 font-display text-2xl font-bold text-brand transition-colors md:text-3xl group-hover:text-cyan-600">{service.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">{service.description}</p>
                    
                    <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                      {service.deliverables.slice(0, 2).map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-brand transition-all duration-200 group-hover:gap-3 group-hover:text-cyan-600">
                      Explore service
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-8 border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-slate-200/80 bg-slate-50 p-8 md:flex-row md:items-center md:justify-between shadow-sm">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600"><Search className="h-5 w-5" /></div>
            <h2 className="mt-4 font-display text-2xl font-bold text-brand">Not sure where to begin?</h2>
            <p className="mt-2 text-sm text-neutral-600">We will help you focus on the opportunity with the clearest path to impact.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand/90 transition-all">
            Talk through your goals <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
      <CTABand />
    </>
  )
}