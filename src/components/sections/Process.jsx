import ScrollStack, { ScrollStackItem } from '../../component/ScrollStack'
import Preheading from '../ui/Preheading' // Adjust the relative path to match your folder structure


const steps = [
  {
    title: 'Discover',
    description:
      'We audit your market, audience and current digital performance to shape a focused plan.',
    bg: 'bg-blue-600',
    textColor: 'text-white',
  },
  {
    title: 'Strategy',
    description:
      'We align messaging, channels and conversion goals into a practical blueprint.',
    bg: 'bg-purple-600',
    textColor: 'text-white',
  },
  {
    title: 'Build',
    description:
      'We design and develop the website, assets and campaign framework with speed and clarity.',
    bg: 'bg-pink-500',
    textColor: 'text-white',
  },
  {
    title: 'Launch',
    description:
      'We roll out the work and monitor performance from day one with disciplined reporting.',
    bg: 'bg-rose-500',
    textColor: 'text-white',
  },
  {
    title: 'Optimise',
    description:
      'We refine the experience and media mix so the growth compounds over time.',
    bg: 'bg-indigo-600',
    textColor: 'text-white',
  },
]

export default function Process() {
  return (
    /* 
       The relative container has a large height (300vh) to serve as a scroll runway.
       The sticky wrapper keeps everything pinned on screen while you scroll through that height.
    */
    <section className="relative bg-brand-light h-[300vh]">
      <div className="sticky top-0 h-screen w-full flex items-center px-6 md:px-8 overflow-hidden">
        <div className="mx-auto max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Stays pinned on screen */}
          <div className="space-y-6">
            <Preheading>Our process</Preheading>

            <h2 className="font-display text-4xl font-bold tracking-tight text-brand md:text-5xl leading-tight">
              A clear path from strategy to measurable growth.
            </h2>

            <p className="text-lg text-neutral-600">
              Scroll down to explore how each phase builds directly into the next.
            </p>
          </div>

          {/* Right Column: Cards Deck */}
          <div className="relative w-full flex justify-center items-center min-h-[420px]">
            <ScrollStack useWindowScroll={true}>
              {steps.map((step, index) => (
                <ScrollStackItem key={step.title}>
                  <div
                    className={`w-[320px] h-[360px] md:w-[380px] md:h-[400px] rounded-3xl p-8 flex flex-col justify-between shadow-2xl ${step.bg} ${step.textColor}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold uppercase tracking-widest opacity-80">
                        Step 0{index + 1}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                        0{index + 1}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-3xl font-bold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-base leading-relaxed opacity-90">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>

        </div>
      </div>
    </section>
  )
}