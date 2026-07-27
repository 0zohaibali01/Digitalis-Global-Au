import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, CheckCircle2, Plus, Minus } from 'lucide-react'
import Button from '../components/ui/Button'
import Preheading from '../components/ui/Preheading'

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@digitalisglobal.com.au',
    href: 'mailto:hello@digitalisglobal.com.au',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+61 (02) 8000 0000',
    href: 'tel:+61280000000',
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    details: 'Sydney, NSW, Australia',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Mon-Fri, 9am - 6pm AEST',
    href: null,
  }
]

const faqs = [
  {
    question: 'How quickly can we get started on a project?',
    answer: 'Once we complete the initial strategy call and sign off on the scope, we typically kick off onboarding within 3 to 5 business days. We move fast to maintain momentum.',
  },
  {
    question: 'Do you work with businesses outside Australia?',
    answer: 'Absolutely. While our primary market is Australia, our digital strategies and enterprise web platforms are built for global scale. We currently manage campaigns for clients across the UK and Europe.',
  },
  {
    question: 'What happens during the free strategy call?',
    answer: 'It is not a sales pitch. We actively review your current digital footprint, analyze competitor gaps live on the call, and outline actionable growth strategies tailored to your timeline and budget.',
  },
  {
    question: 'Do you offer custom pricing packages?',
    answer: 'Yes. Because we handle everything in-house—from SEO to custom e-commerce builds—we tailor our retainers and project fees directly to the resources your specific growth goals require.',
  }
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
  const [errorMessage, setErrorMessage] = useState('')
  const [openFaq, setOpenFaq] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('http://localhost:5000/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSubmitted(true)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: 'Web Development',
          budget: '$5k - $10k',
          message: '',
        })
      } else {
        setErrorMessage(result.message || 'Validation failed. Please check your inputs.')
      }
    } catch (error) {
      console.error('API Error:', error)
      setErrorMessage('Unable to reach server. Please ensure backend is active.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative w-full bg-brand-light pb-24 lg:pb-32 min-h-screen">
      
      {/* Dark Header Banner Background */}
      <div className="absolute top-0 left-0 w-full h-[550px] bg-gradient-to-b from-brand-dark via-brand to-brand-dark overflow-hidden rounded-b-[2.5rem] lg:rounded-b-[4rem]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.1),rgba(16,61,77,0.05))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-36">
        
        {/* Header Title Section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Preheading className="text-cyan-400">Let's connect</Preheading>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
            Let's build <span className="text-cyan-400">something great.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
            Whether you need a high-performance web platform or a scalable performance marketing engine, our team is ready to deliver.
          </p>
        </div>

        {/* Content Split Layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon
              const CardWrapper = card.href ? 'a' : 'div'
              return (
                <CardWrapper
                  key={card.title}
                  href={card.href}
                  target={card.href?.startsWith('http') ? '_blank' : undefined}
                  className={`group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 ${
                    card.href ? 'hover:border-cyan-400 hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)] hover:-translate-y-1 cursor-pointer' : ''
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-brand mb-5 transition-colors duration-300 group-hover:bg-cyan-50 group-hover:text-cyan-600">
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>
                  <h4 className="text-sm font-bold text-brand mb-1">{card.title}</h4>
                  <p className="text-sm text-neutral-500 line-clamp-2">{card.details}</p>
                </CardWrapper>
              )
            })}
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 sm:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center flex flex-col items-center"
                >
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-cyan-50 text-cyan-500 mb-8">
                    <div className="absolute inset-0 rounded-full border border-cyan-200 animate-ping" />
                    <CheckCircle2 className="h-10 w-10 stroke-[2]" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-brand mb-4">Inquiry Received</h3>
                  <p className="text-neutral-600 text-base max-w-sm mx-auto leading-relaxed">
                    Thank you. A strategist from Digitalis Global will review your requirements and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 px-6 py-2.5 rounded-full border border-neutral-200 text-sm font-bold text-brand hover:bg-slate-50 hover:border-neutral-300 transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 pl-1">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-sm text-brand placeholder-neutral-400 transition-all duration-300 hover:border-neutral-300 focus:border-cyan-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-400/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 pl-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-sm text-brand placeholder-neutral-400 transition-all duration-300 hover:border-neutral-300 focus:border-cyan-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-400/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 pl-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+61 400 000 000"
                        className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-sm text-brand placeholder-neutral-400 transition-all duration-300 hover:border-neutral-300 focus:border-cyan-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-400/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 pl-1">Service Required</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-sm text-brand transition-all duration-300 hover:border-neutral-300 focus:border-cyan-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-400/10 cursor-pointer"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="Google Ads & PPC">Google Ads & PPC</option>
                        <option value="Branding & Creative">Branding & Creative</option>
                        <option value="E-Commerce Development">E-Commerce Development</option>
                        <option value="SEO & Technical SEO">SEO & Technical SEO</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 pl-1">Estimated Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-sm text-brand transition-all duration-300 hover:border-neutral-300 focus:border-cyan-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-400/10 cursor-pointer"
                    >
                      <option value="< $2.5k">Under $2,500 / mo</option>
                      <option value="$2.5k - $5k">$2,500 – $5,000 / mo</option>
                      <option value="$5k - $10k">$5,000 – $10,000 / mo</option>
                      <option value="$10k+">$10,000+ / mo</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 pl-1">Project Details</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals, timeline, and current challenges..."
                      className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-sm text-brand placeholder-neutral-400 transition-all duration-300 hover:border-neutral-300 focus:border-cyan-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-400/10 resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="flex-1 min-w-[200px] sm:flex-initial pl-6 pr-2 py-3 gap-4 text-center justify-center sm:justify-between" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Interactive FAQ Accordion Section */}
        <div className="mt-32 pt-16 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-bold text-brand">Frequently Asked Questions</h3>
            <p className="mt-3 text-sm text-neutral-500">Everything you need to know before we partner up.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div 
                  key={index} 
                  className={`rounded-2xl border transition-all duration-500 ${
                    isOpen ? 'border-cyan-300 bg-white shadow-md' : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                  >
                    <span className={`font-display text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-cyan-600' : 'text-brand'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? 'bg-cyan-50 text-cyan-600' : 'bg-slate-50 text-neutral-400'}`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-sm leading-relaxed text-neutral-600 border-t border-neutral-100 pt-4 mt-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}