import Button from '../ui/Button'
import { Link, useNavigate } from 'react-router-dom'


export default function CTABand() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 px-6 md:px-8 md:py-28">

      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Increased max-w-5xl to max-w-7xl to match Navbar and Hero width */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* High-Contrast Floating Card with bg-brand-dark */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-dark p-8 md:p-16 border border-cyan-500/20 shadow-[0_20px_50px_rgba(15,23,42,0.15)]">

          {/* Subtle Inner Mesh Pattern Overlay */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

          {/* Card Content */}
          <div className="relative z-10 mx-auto max-w-3xl text-center">

            {/* Pill Tag */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Let&apos;s talk
              </span>
            </div>

            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl leading-tight">
              Ready to Grow Your Business Online?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300 md:text-xl">
              No lock-in contracts. Just an honest conversation about your goals.
            </p>

            {/* Primary Action Button */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                as={Link}
                to="/au/contact"
                variant="primary"
                className="scale-105 pl-8 pr-3 py-4 gap-4 text-base"
              >
                Book a Free Strategy Call
              </Button>
            </div>

            {/* Contact Pills */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm">
              <a
                href="tel:+61412345678"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 font-medium text-slate-200 transition-all hover:border-cyan-400 hover:text-white"
              >
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +61 412 345 678
              </a>

              <a
                href="mailto:hello@digitalisglobal.com"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 font-medium text-slate-200 transition-all hover:border-cyan-400 hover:text-white"
              >
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@digitalisglobal.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}