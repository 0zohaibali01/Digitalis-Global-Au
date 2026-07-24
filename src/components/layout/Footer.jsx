import { Globe2, MessageCircle, Send } from 'lucide-react'
import Button from '../ui/Button'

const services = ['SEO', 'Google Ads', 'Web Development', 'E-commerce', 'Branding']
const company = [
  { label: 'About', href: '/au/about' },
  { label: 'Careers', href: '#contact' },
  { label: 'Blog', href: '#contact' },
  { label: 'Case Studies', href: '/au/case-studies' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-brand-dark px-6 py-16 text-white md:px-8 md:py-20">
      {/* --- VISIBLE TOP BORDER LINE WITH SHARP GLOW --- */}
      {/* 1. Bright & Distinct Top Line (1.5px thick for presence) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.7)]"
      />

      {/* 2. Soft Edge-to-Edge Glow Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[3px] w-[90%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent blur-sm"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3 text-lg font-semibold">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
                DG
              </span>
              <span className="font-display">Digitalis Global</span>
            </div>
            <p className="mt-6 max-w-md text-base leading-8 text-white/70">
              Servicing all of Australia — remote-first, strategic and built for growth.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <p>hello@digitalisglobal.com</p>
              <p>+61 412 345 678</p>
              <p>Remote-first across Australia</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:contents">
            <div>
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#services" className="hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <form className="mt-4 flex flex-col gap-3">
              <label className="text-sm text-white/70" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
                placeholder="you@example.com"
              />
              <Button
                type="submit"
                variant="primary"
                className="w-full sm:w-auto px-8 py-3.5 text-center justify-center gap-3"
              >
                Subscribe
              </Button>
            </form>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/digitalisglobal/"
                className="rounded-full border border-white/10 p-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Globe2 className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/digitalisglobal/"
                className="rounded-full border border-white/10 p-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/digitalisglobal/"
                className="rounded-full border border-white/10 p-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Digitalis Global. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}