import { useState } from 'react'

const AUSTRALIA_REGIONS = [
  {
    id: 'nsw',
    name: 'New South Wales & ACT',
    capital: 'Sydney',
    coverage: '100% Remote & On-site Services',
    pin: { cx: 400, cy: 300 }, // Scaled coordinate relative to SVG viewBox
    description: 'Serving Sydney, Newcastle, Wollongong, and Canberra.',
  },
  {
    id: 'vic',
    name: 'Victoria',
    capital: 'Melbourne',
    coverage: 'Strategic Growth Hub',
    pin: { cx: 350, cy: 335 },
    description: 'Serving Greater Melbourne, Geelong, and Ballarat.',
  },
  {
    id: 'qld',
    name: 'Queensland',
    capital: 'Brisbane',
    coverage: 'Rapid Delivery Region',
    pin: { cx: 410, cy: 210 },
    description: 'Serving Brisbane, Gold Coast, Sunshine Coast, and Cairns.',
  },
  {
    id: 'wa',
    name: 'Western Australia',
    capital: 'Perth',
    coverage: 'Remote-First Operations',
    pin: { cx: 120, cy: 280 },
    description: 'Serving Perth, Fremantle, and regional WA commercial centers.',
  },
  {
    id: 'sa',
    name: 'South Australia',
    capital: 'Adelaide',
    coverage: 'Full Strategic Coverage',
    pin: { cx: 270, cy: 290 },
    description: 'Serving Adelaide and surrounding regional hubs.',
  },
  {
    id: 'tas',
    name: 'Tasmania',
    capital: 'Hobart',
    coverage: 'Digital Services Hub',
    pin: { cx: 365, cy: 385 },
    description: 'Serving Hobart, Launceston, and regional Tasmania.',
  },
]

export default function AustraliaMap() {
  const [activeRegion, setActiveRegion] = useState(AUSTRALIA_REGIONS[0])

  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 px-6 md:px-8 md:py-28 text-white">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

      {/* Aligned to max-w-7xl matching the Navbar width */}
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            Australia-Wide Reach
          </span>

          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
            Empowering Businesses Across Australia.
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            Remote-first strategy with nationwide impact. Select a region to explore our coverage.
          </p>
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive State Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
              Select Region
            </p>
            {AUSTRALIA_REGIONS.map((region) => {
              const isActive = activeRegion.id === region.id
              return (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region)}
                  onMouseEnter={() => setActiveRegion(region)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-slate-800/90 border-cyan-400/60 shadow-[0_0_20px_rgba(34,211,238,0.15)] translate-x-2'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <div>
                    <h3 className={`font-bold text-base ${isActive ? 'text-cyan-300' : 'text-white'}`}>
                      {region.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{region.capital}</p>
                  </div>

                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    isActive ? 'bg-cyan-400/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {region.coverage.split(' ')[0]}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right Column: Animated Vector Map Display */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-center p-6 bg-slate-900/50 border border-slate-800 rounded-3xl backdrop-blur-sm">
            
            <div className="relative w-full max-w-[500px] aspect-[4/3]">
              {/* Australia Vector Map SVG */}
              <svg
                viewBox="0 0 500 420"
                className="w-full h-full drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M110,210 Q100,160 150,150 Q180,140 220,120 Q250,90 270,100 Q280,120 290,160 Q340,150 380,120 Q420,100 430,150 Q450,190 440,240 Q430,280 400,310 Q380,330 360,350 L340,340 Q300,320 270,300 Q230,300 180,310 Q130,310 110,280 Q90,250 110,210 Z M350,370 Q370,370 375,390 Q360,400 350,390 Z"
                  className="fill-slate-800/80 stroke-cyan-500/30 transition-all duration-500 hover:stroke-cyan-400"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />

                {/* Animated Pulsing Location Pins */}
                {AUSTRALIA_REGIONS.map((region) => {
                  const isActive = activeRegion.id === region.id
                  return (
                    <g key={region.id} className="cursor-pointer" onClick={() => setActiveRegion(region)}>
                      {isActive && (
                        <circle
                          cx={region.pin.cx}
                          cy={region.pin.cy}
                          r="18"
                          className="animate-ping fill-cyan-400/20 stroke-cyan-400/60"
                          strokeWidth="1"
                        />
                      )}

                      <circle
                        cx={region.pin.cx}
                        cy={region.pin.cy}
                        r={isActive ? "12" : "6"}
                        className={`transition-all duration-300 ${
                          isActive
                            ? 'fill-cyan-500/30 stroke-cyan-400 stroke-2'
                            : 'fill-slate-700/50 stroke-slate-500'
                        }`}
                      />

                      <circle
                        cx={region.pin.cx}
                        cy={region.pin.cy}
                        r={isActive ? "5" : "3"}
                        className={`transition-all duration-300 ${
                          isActive ? 'fill-cyan-300 shadow-[0_0_10px_#22d3ee]' : 'fill-slate-400'
                        }`}
                      />

                      <text
                        x={region.pin.cx}
                        y={region.pin.cy - 14}
                        textAnchor="middle"
                        className={`text-[11px] font-semibold transition-all duration-300 pointer-events-none ${
                          isActive ? 'fill-cyan-300 opacity-100' : 'fill-slate-500 opacity-60'
                        }`}
                      >
                        {region.capital}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

            {/* Active Region Information Footer */}
            <div className="w-full mt-6 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Active Region: {activeRegion.name}
                </span>
                <p className="text-sm text-slate-300 mt-0.5">{activeRegion.description}</p>
              </div>

              <div className="shrink-0">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {activeRegion.coverage}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}