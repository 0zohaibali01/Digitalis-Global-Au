import * as RadixAccordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  return (
    <RadixAccordion.Root type="single" collapsible className="space-y-4">
      {items.map((item, index) => (
        <RadixAccordion.Item
          key={item.question}
          value={item.question}
          className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl data-[state=open]:border-accent/40"
        >
          {/* Animated Left Accent Bar */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-accent transition-all duration-300 group-hover:w-1 data-[state=open]:w-1" />

          <RadixAccordion.Header>
            <RadixAccordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <span className="text-base font-semibold text-brand transition-colors duration-300 group-data-[state=open]:text-accent">
                {index + 1}. {item.question}
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/5 transition-all duration-300 group-hover:bg-accent/10 group-data-[state=open]:bg-accent/10">
                <ChevronDown className="h-5 w-5 text-brand transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-accent" />
              </span>
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>

          <RadixAccordion.Content className="accordion-content overflow-hidden">
            <div className="px-6 pb-6 text-sm leading-7 text-neutral-600">
              {item.answer}
            </div>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  )
}