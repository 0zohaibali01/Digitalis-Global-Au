import Accordion from '../ui/Accordion'
import { faqItems } from '../../data/faq'
import Preheading from '../ui/Preheading' // Adjust the relative path to match your folder structure

export default function FAQ() {
  return (
    <section className="bg-brand-light px-6 py-20 md:px-8 md:py-32">
      {/* Updated container max-width from max-w-5xl to max-w-7xl */}
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Preheading className="text-brand">FAQ</Preheading>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand md:text-5xl font-display">
            Questions we hear from Australian businesses.
          </h2>
        </div>
        <div className="mt-12">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  )
}