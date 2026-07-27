import { Globe } from 'lucide-react'
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.7)]"
      />

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
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/company/digitalisglobal/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/digitalisglobal/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/digitalisglobal/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
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