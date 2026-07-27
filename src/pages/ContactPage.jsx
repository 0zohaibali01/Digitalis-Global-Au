import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Building2,
  Send,
} from 'lucide-react'
import Button from '../components/ui/Button'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'hello@digitalisglobal.com.au',
    subtext: 'We usually respond within 2-4 business hours.',
    actionHref: 'mailto:hello@digitalisglobal.com.au',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+61 (02) 8000 0000',
    subtext: 'Mon-Fri from 9:00 AM to 6:00 PM AEST.',
    actionHref: 'tel:+61280000000',
  },
  {
    icon: MapPin,
    title: 'Our Office',
    details: 'Sydney, New South Wales',
    subtext: 'Australia',
    actionHref: 'https://maps.google.com',
  },
]

const faqs = [
  {
    question: 'How quickly can we get started on a project?',
    answer:
      'Once we complete the initial strategy call and sign off on the scope, we typically kick off onboarding within 3 to 5 business days.',
  },
  {
    question: 'Do you work with businesses outside Australia?',
    answer:
      'Yes! While our primary market is Australia, we manage campaigns and digital products for clients worldwide.',
  },
  {
    question: 'What happens during the free strategy call?',
    answer:
      'We review your current digital footprint, analyze competitor gaps, and outline actionable growth strategies tailored to your timeline and budget.',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Web Development',
    budget: '$5k - $10k',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API form submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: 'Web Development',
        budget: '$5k - $10k',
        message: '',
      })
    }, 1200)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-dark py-24 text-white lg:py-32">
      {/* Background Decor Radial Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-950/40 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Title Section */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            Let's Talk Growth
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to scale your digital presence?
          </h1>

          <p className="mt-4 text-lg text-neutral-400">
            Book a free strategy session or send us a message below. We’ll audit your brand and show you where the growth opportunities are.
          </p>
        </div>

        {/* Form & Info Section */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="font-display text-2xl font-bold text-white">Get in touch</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Prefer to email or call directly? Reach out anytime using the details below.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.title}
                      href={item.actionHref}
                      target={item.actionHref.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-white/10 hover:bg-white/5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                        <p className="text-sm font-medium text-cyan-400">{item.details}</p>
                        <p className="mt-0.5 text-xs text-neutral-400">{item.subtext}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Business Hours</h4>
                <p className="text-xs text-neutral-400">Monday – Friday: 9:00 AM – 6:00 PM AEST</p>
                <p className="text-xs text-neutral-400">Saturday – Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
              {isSubmitted ? (
                <div className="py-12 text-center animate-in fade-in duration-500">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400 mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">Message Received!</h3>
                  <p className="mt-3 text-neutral-300 text-sm max-w-md mx-auto">
                    Thanks for reaching out! A digital strategist from Digitalis Global will review your details and reach back out within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-xs font-semibold text-cyan-400 underline hover:text-cyan-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">Send us a message</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Fill out the form below and we'll get back to you promptly.
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-neutral-500 transition-all focus:border-cyan-400 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-neutral-500 transition-all focus:border-cyan-400 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+61 400 000 000"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-neutral-500 transition-all focus:border-cyan-400 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white transition-all focus:border-cyan-400 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      >
                        <option value="Web Development" className="bg-slate-900 text-white">Web Development</option>
                        <option value="Google Ads & PPC" className="bg-slate-900 text-white">Google Ads & PPC</option>
                        <option value="Branding & Creative" className="bg-slate-900 text-white">Branding & Creative</option>
                        <option value="E-Commerce Development" className="bg-slate-900 text-white">E-Commerce Development</option>
                        <option value="SEO & Technical SEO" className="bg-slate-900 text-white">SEO & Technical SEO</option>
                        <option value="Content Marketing" className="bg-slate-900 text-white">Content Marketing</option>
                        <option value="Conversion Rate Optimisation" className="bg-slate-900 text-white">Conversion Rate Optimisation</option>
                      </select>
                    </div>
                  </div>

                  {/* Monthly Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
                      Estimated Monthly Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white transition-all focus:border-cyan-400 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    >
                      <option value="< $2.5k" className="bg-slate-900 text-white">Under $2,500 / mo</option>
                      <option value="$2.5k - $5k" className="bg-slate-900 text-white">$2,500 – $5,000 / mo</option>
                      <option value="$5k - $10k" className="bg-slate-900 text-white">$5,000 – $10,000 / mo</option>
                      <option value="$10k+" className="bg-slate-900 text-white">$10,000+ / mo</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
                      Project Details / Goals *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project goals, current challenges, and timeline..."
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-neutral-500 transition-all focus:border-cyan-400 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>

                  {/* Form Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="w-full justify-between px-6 py-4 text-sm"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQs Accordion/Grid Section */}
        <div className="mt-24 border-t border-white/10 pt-16">
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold text-white">Frequently Asked Questions</h3>
            <p className="mt-2 text-sm text-neutral-400">Everything you need to know before reaching out.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h4 className="font-display text-lg font-bold text-white">{faq.question}</h4>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}