const logos = ['Google', 'Shopify', 'Meta', 'HubSpot', 'Canva', 'Stripe']

export default function TrustBar() {
  // Repeating 3 times ensures seamless infinite loop without gaps
  const marqueeLogos = [...logos, ...logos, ...logos]

  return (
    <section className="relative border-y border-neutral-200/80 bg-white/60 px-4 py-6 backdrop-blur-sm md:px-8 md:py-8">
      {/* Custom Keyframe Styles injected directly for clean zero-config marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-sm sm:tracking-[0.3em]">
          Trusted by <span className="text-neutral-800 font-bold">500+ brands</span> across Australia and beyond
        </p>

        {/* Marquee Wrapper with Side-Fade Gradient Masks */}
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-50/80 py-3 sm:py-4 shadow-inner">
          
          {/* Left Gradient Mask */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-neutral-50 to-transparent sm:w-24" />
          
          {/* Right Gradient Mask */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-neutral-50 to-transparent sm:w-24" />

          {/* Scrolling Marquee Container */}
          <div className="flex w-max items-center gap-8 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] sm:gap-14">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="group flex items-center gap-2 cursor-pointer transition-all duration-300"
              >
                {/* Brand Text styling */}
                <span className="text-base font-extrabold uppercase tracking-[0.15em] text-neutral-400 transition-colors duration-300 group-hover:text-accent sm:text-lg sm:tracking-[0.25em]">
                  {logo}
                </span>

                {/* Subtle separator dot */}
                <span className="ml-6 h-1.5 w-1.5 rounded-full bg-neutral-300 transition-colors group-hover:bg-accent/50 sm:ml-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}