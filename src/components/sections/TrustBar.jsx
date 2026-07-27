const rowOne = [
  'Web Development',
  'E-commerce',
  'Technical SEO',
  'Performance Marketing',
  'UI/UX Design',
  'Branding',
  'Video & Motion',
]

const rowTwo = [
  'Shopify Plus',
  'WooCommerce',
  'Next.js',
  'React',
  'WordPress',
  'MERN Stack',
  'Laravel',
  'Figma',
]

function MarqueeRow({ items, reverse = false }) {
  const repeated = [...items, ...items]

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {repeated.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex shrink-0 items-center"
          >
            <span className="px-14 py-7 text-xl font-bold text-slate-800 transition-colors duration-300 hover:text-cyan-500">
              {item}
            </span>

            <span className="text-cyan-500 text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TrustBar() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeReverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marqueeReverse 28s linear infinite;
        }

        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="bg-[#f7f8fb]">
        <div className="border-y border-slate-300">

          {/* First Row */}
          <MarqueeRow items={rowOne} />

          {/* Divider */}
          <div className="border-t border-dashed border-slate-300" />

          {/* Second Row */}
          <MarqueeRow
            items={rowTwo}
            reverse
          />

        </div>
      </section>
    </>
  )
}