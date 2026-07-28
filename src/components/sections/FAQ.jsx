import Accordion from '../ui/Accordion'
import { faqItems } from '../../data/faq'
import Preheading from '../ui/Preheading'

export default function FAQ() {
  return (
    <section className="bg-brand-light px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column: Preheading & Title (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Preheading className="text-brand">FAQ</Preheading>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand md:text-5xl font-display leading-[1.15]">
              Questions we hear from Australian businesses.
            </h2>
            <p className="mt-6 text-base text-neutral-600 leading-relaxed">
              Have a question that isn't answered here? Reach out to our strategy team for direct assistance.
            </p>
          </div>

          {/* Right Column: Accordion Component (Spans 7 cols on lg) */}
          <div className="lg:col-span-7">
            <Accordion items={faqItems} />
          </div>

        </div>
      </div>
    </section>
  )
}