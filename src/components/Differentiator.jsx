export default function Differentiator() {
  const principles = [
    {
      number: '01',
      title: 'Connectivity is the advantage',
      keyPoints: ['Most operators see their domain in isolation. I connect the dots across ', 'revenue, operations, and strategy', '. The advantage is never in one thing. It\'s in seeing how everything fits.'],
    },
    {
      number: '02',
      title: 'Alignment creates scale',
      keyPoints: ['You can\'t scale misalignment. Every function needs to understand the same mission. ', 'Unit economics, go-to-market, operations', ' — they only compound when they pull in the same direction.'],
    },
    {
      number: '03',
      title: 'Results Over Storytelling',
      keyPoints: ['I optimise for what actually works, not what looks good in a deck. ', 'Data over narrative. Efficiency over elegance. ', 'Results beat rhetoric every time.'],
    },
  ]

  return (
    <section id="differentiator" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="text-gray-600 text-sm uppercase tracking-widest font-medium mb-6">
            Operating Philosophy
          </p>
          <h2 className="text-6xl md:text-7xl font-serif mb-6" style={{ color: '#c8b99a' }}>
            How I <span className="italic">think</span>.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Three principles that guide how I approach business, leadership, and creating lasting impact.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-16" />

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {principles.map((principle, index) => (
            <div key={index} className="space-y-8 pb-12 md:border-r md:border-gray-800 md:last:border-r-0 md:pr-12">
              {/* Number */}
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wider">
                {principle.number}
              </p>

              {/* Title */}
              <h3 className="text-3xl md:text-2xl font-serif text-white leading-tight">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-400 leading-relaxed">
                {principle.keyPoints[0]}
                <span className="text-white font-semibold">{principle.keyPoints[1]}</span>
                {principle.keyPoints[2]}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="w-full h-px bg-gray-800 mb-16" />

        {/* Quote & CTA */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <p className="text-gray-600 italic text-base max-w-lg">
            "The advantage is never in one thing."
          </p>
          <a
            href="#contact"
            className="text-gold-400 font-bold uppercase tracking-wide text-sm hover:text-gold-300 transition-colors"
          >
            Let's talk →
          </a>
        </div>
      </div>
    </section>
  )
}
