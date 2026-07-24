import { Helmet } from 'react-helmet-async'
import { ArrowRight, Check, Globe2, HeartHandshake, Lightbulb, MapPin, Target } from 'lucide-react'
import Button from '../components/ui/Button'
import Preheading from '../components/ui/Preheading'
import Reveal from '../components/ui/Reveal'
import CTABand from '../components/sections/CTABand'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import { aboutMeta } from '../seo/meta'
import { buildAboutPageSchema, buildOrganizationSchema, buildProfessionalServiceSchema } from '../seo/schema'

const principles = [
  { icon: Target, title: 'Commercially minded', copy: 'We start with the business result, then choose the channel, technology and creative work that earns it.' },
  { icon: HeartHandshake, title: 'Clear by default', copy: 'Straight answers, visible priorities and reporting that tells you what changed and why it matters.' },
  { icon: Lightbulb, title: 'Built to improve', copy: 'We test, learn and refine. Your digital presence is treated as a living growth asset, not a one-off launch.' },
]

const timeline = [
  ['2021', 'Built for better outcomes', 'Digitalis Global began with a simple belief: Australian businesses deserve digital work that connects to real commercial goals.'],
  ['2022', 'One connected team', 'We brought strategy, design, development and marketing closer together so good ideas do not get lost in handovers.'],
  ['Today', 'Australia-wide growth partner', 'We work remotely with ambitious teams across Australia, combining local market awareness with specialist delivery.'],
]

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{aboutMeta.title}</title>
        <meta name="description" content={aboutMeta.description} />
        <link rel="canonical" href={aboutMeta.canonical} />
        <meta name="theme-color" content="#103D4D" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={aboutMeta.title} />
        <meta property="og:description" content={aboutMeta.description} />
        <meta property="og:image" content={aboutMeta.ogImage} />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="geo.region" content="AU" />
        <meta name="geo.placename" content="Australia" />
        <script type="application/ld+json">{JSON.stringify(buildAboutPageSchema())}</script>
        <script type="application/ld+json">{JSON.stringify(buildProfessionalServiceSchema())}</script>
        <script type="application/ld+json">{JSON.stringify(buildOrganizationSchema())}</script>
      </Helmet>

      <section className="relative isolate overflow-hidden bg-brand-dark px-6 pb-20 pt-36 text-white md:px-8 md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(14,165,233,0.26),transparent_26%),radial-gradient(circle_at_16%_82%,rgba(27,90,110,0.72),transparent_34%)]" />
        <div className="pointer-events-none absolute right-[9%] top-20 h-72 w-72 rounded-full border border-cyan-300/20" />
        <div className="pointer-events-none absolute right-[14%] top-28 h-56 w-56 rounded-full border border-white/10" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <Breadcrumbs items={[{ label: 'About' }]} />
            <Preheading className="border-cyan-300/30 bg-cyan-400/10" textClassName="text-cyan-200">About Digitalis Global</Preheading>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-7xl">Good digital work should move your business forward.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">We are a growth-focused digital agency for Australian businesses that want a clearer path from digital activity to measurable momentum.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button as="a" href="#contact" variant="primary" className="gap-4 px-6 py-3.5">Start a conversation <ArrowRight className="h-4 w-4" /></Button>
              <a href="#our-story" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-cyan-300 hover:bg-white/5">Our story <ArrowRight className="h-4 w-4" /></a>
            </div>
          </Reveal>
          <Reveal className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm md:p-9">
            <div className="absolute -top-3 left-8 rounded-full border border-cyan-300/30 bg-brand px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Our promise</div>
            <p className="font-display text-2xl font-bold leading-snug text-white md:text-3xl">The people doing the work stay close to the people making the decisions.</p>
            <p className="mt-5 leading-7 text-slate-300">That means less jargon, fewer layers and a team that understands the outcome you are working towards.</p>
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-cyan-100"><MapPin className="h-5 w-5 text-cyan-300" /> Remote-first, available across Australia</div>
          </Reveal>
        </div>
      </section>

      <section id="our-story" className="bg-white px-6 py-20 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <Preheading>How we think</Preheading>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand md:text-5xl">A sharper way to grow online.</h2>
          </Reveal>
          <Reveal>
            <p className="text-xl leading-9 text-neutral-800">Digitalis Global brings the disciplines that shape modern growth into one practical team: brand and UX, websites and e-commerce, SEO and paid acquisition.</p>
            <p className="mt-6 leading-8 text-neutral-600">We partner with Australian founders and marketing teams who need more than a supplier. They need people who can see the bigger picture, execute the detail and say what is worth doing next.</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Strategy before activity', 'Specialists without silos', 'Straightforward communication', 'Decisions guided by evidence'].map((item) => <li key={item} className="flex items-center gap-3 text-sm font-semibold text-brand"><Check className="h-5 w-5 rounded-full bg-cyan-100 p-1 text-cyan-700" />{item}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-light px-6 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl"><Preheading>What guides us</Preheading><h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand md:text-5xl">High standards. No theatre.</h2></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, copy }) => <Reveal key={title} className="group rounded-3xl border border-brand/10 bg-white p-8 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-xl"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-brand"><Icon className="h-6 w-6" /></div><h3 className="mt-7 font-display text-xl font-bold text-brand">{title}</h3><p className="mt-3 leading-7 text-neutral-600">{copy}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><Reveal><Preheading>Our evolution</Preheading><h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand md:text-5xl">Designed to keep getting better.</h2></Reveal><Reveal><p className="max-w-xl leading-8 text-neutral-600">Our model has grown around a simple goal: give businesses a capable digital partner that stays accountable from the first workshop through to what happens next.</p></Reveal></div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">{timeline.map(([year, title, copy]) => <Reveal key={year} className="relative border-t-2 border-cyan-400 pt-7"><p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">{year}</p><h3 className="mt-3 font-display text-2xl font-bold text-brand">{title}</h3><p className="mt-4 leading-7 text-neutral-600">{copy}</p></Reveal>)}</div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-dark px-6 py-20 text-white md:px-8 md:py-28"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(14,165,233,0.18),transparent_30%)]" /><div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-center"><Reveal><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300"><Globe2 className="h-6 w-6" /></div><h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight md:text-5xl">Local context. National reach.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Whether your customers are in Sydney, Melbourne, Brisbane, Perth or beyond, we build digital systems that make sense for the Australian market and your particular goals.</p></Reveal><Reveal><a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-6 py-4 font-bold text-cyan-100 transition hover:bg-cyan-400 hover:text-brand">Work with our team <ArrowRight className="h-5 w-5" /></a></Reveal></div></section>
      <CTABand />
    </>
  )
}
