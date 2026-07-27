import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Check, Sparkles, HelpCircle } from 'lucide-react'
import Button from '../components/ui/Button' // Adjust path if your Button component is in src/components/ui/Button

const pricingPlans = [
  {
    name: 'Starter',
    tagline: 'Ideal for small businesses looking to establish a strong online presence.',
    price: '$1,490',
    period: '/month',
    featured: false,
    badge: null,
    features: [
      'Custom Web Development or Redesign',
      'Basic On-Page & Technical SEO',
      'Google My Business Optimisation',
      'Monthly Performance Reporting',
      'Standard Support (24h response time)',
    ],
    ctaText: 'Get Started',
    ctaHref: '#contact',
    variant: 'secondary',
  },
  {
    name: 'Growth',
    tagline: 'Our most popular plan designed for rapidly scaling brands.',
    price: '$2,990',
    period: '/month',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Comprehensive Web & E-Commerce Solutions',
      'Advanced SEO & Content Strategy',
      'Google Ads / Meta Campaign Management',
      'Conversion Rate Optimisation (CRO)',
      'Bi-Weekly Strategy & Reporting Calls',
      'Priority Support (4h response time)',
    ],
    ctaText: 'Start Growing Today',
    ctaHref: '#contact',
    variant: 'primary',
  },
  {
    name: 'Enterprise',
    tagline: 'Custom tailored strategies for high-volume enterprise organizations.',
    price: 'Custom',
    period: '',
    featured: false,
    badge: 'Custom Tailored',
    features: [
      'Bespoke Web Platform Development',
      'Full-Funnel Omnichannel Marketing',
      'Dedicated SEO & Technical Squad',
      'Custom Analytics & Attribution Dashboard',
      'Dedicated Account Manager',
      '24/7 SLA & Instant Emergency Support',
    ],
    ctaText: 'Contact Sales',
    ctaHref: '#contact',
    variant: 'secondary',
  },
]

export default function PricingPage() {
  const navigate = useNavigate()

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault()
    const target = document.getElementById(targetId)

    if (!target) {
      navigate(`/au#${targetId}`)
      return
    }

    const navbarHeight = 80
    const end = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight

    window.scrollTo({
      top: end,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative overflow-hidden bg-brand-dark py-24 text-white lg:py-32">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-950/30 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            Transparent Pricing
          </div>

          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Flexible plans to match your ambitious growth
          </h2>

          <p className="mt-4 text-lg text-neutral-400">
            No hidden fees. No long-term lock-ins. Pick a plan that fits your business objectives and start scaling today.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan) => {
            const isPrimary = plan.variant === 'primary'

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  plan.featured
                    ? 'border-2 border-cyan-400 bg-brand/90 shadow-[0_0_50px_rgba(34,211,238,0.15)] lg:-translate-y-2'
                    : 'border border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                {/* Popular / Feature Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-1 text-xs font-bold text-slate-950 uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-neutral-400">{plan.tagline}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                      {plan.price}
                    </span>
                    {plan.period && <span className="text-sm text-neutral-400">{plan.period}</span>}
                  </div>

                  <hr className="my-8 border-white/10" />

                  {/* Feature Checklist */}
                  <ul className="space-y-4 text-sm text-neutral-300">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan CTA Button */}
                <div className="mt-10">
                  {isPrimary ? (
                    <Button
                      as="a"
                      href={plan.ctaHref}
                      variant="primary"
                      onClick={(e) => handleAnchorClick(e, 'contact')}
                      className="w-full justify-between px-6 py-3.5 text-sm"
                    >
                      {plan.ctaText}
                    </Button>
                  ) : (
                    <Button
                      as="a"
                      href={plan.ctaHref}
                      variant="secondary"
                      onClick={(e) => handleAnchorClick(e, 'contact')}
                      className="w-full text-center text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border-white/20"
                    >
                      {plan.ctaText}
                    </Button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 text-center sm:p-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400 mb-4">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h3 className="font-display text-2xl font-bold text-white">Need a custom scope or have specific requirements?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-neutral-400 text-sm">
            We build custom growth packages tailored precisely to your tech stack, marketing budget, and business targets.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              as="a"
              href="#contact"
              variant="primary"
              onClick={(e) => handleAnchorClick(e, 'contact')}
              className="h-12 pl-6 pr-2 gap-4 text-sm"
            >
              Book a Free Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}