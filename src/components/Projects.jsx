export default function Projects() {
  const experiences = [
    {
      name: 'Navigate',
      role: 'Co-Founder & Chief Executive Officer',
      description: 'Prospecting intelligence platform designed to modernize prospecting for residential real estate agents. Restructured ownership, stabilized operations, redesigned pricing architecture, and renegotiated core data partnerships to materially improve unit economics. Built preferred partnership with Compass, serving 60k+ agents.',
      highlights: [
        'Strengthened data infrastructure and distribution',
        'Established Compass partnership for 60k+ agent network',
        'Improved unit economics and financial performance',
      ],
    },
    {
      name: 'Lacure',
      role: 'Chief Commercial Officer',
      description: 'Luxury villa portfolio management platform. Led 65-person global organization across sales, marketing, contracting, and client services managing 1,500+ luxury villas worldwide.',
      highlights: [
        'Led 65-person global commercial organization',
        'Oversaw commercial strategy for 1,500+ villas',
        'Managed sales, marketing, and client services',
      ],
    },
    {
      name: 'Sonder Hospitality',
      role: 'Area General Manager',
      description: 'Technology-enabled provider of alternative accommodations. Led 40-person team across real estate, marketing, revenue, operations and sales managing portfolio of 5 hotels with 700+ apartment-style and hotel rooms across California markets.',
      highlights: [
        'Led 40-person real estate, marketing, and operations team',
        'Successfully negotiated multi-million dollar lease agreements',
        'Managed 700+ rooms across Los Angeles, Orange County, Palm Springs and San Francisco',
      ],
    },
    {
      name: 'Bonotel Exclusive Travel',
      role: 'Chief Marketing Officer & Chief Operations Officer',
      description: 'Carlyle-backed $300M luxury hospitality platform. Drove revenue growth from $224M to $285M, operating model redesign, and strategic acquisitions including luxury concierge services business.',
      highlights: [
        'Grew revenue from $224M to $285M leading to acquisition by Travel Leaders Group (2017)',
        'Re-architected sales organization, increasing net revenue growth ~14% over 3 years',
        'Completed acquisition of luxury concierge services, increasing revenue +33% and margin +17%',
      ],
    },
    {
      name: 'Diageo',
      role: 'Regional Marketing Manager & Futures Leaders Program',
      description: 'Global spirits leader managing P&L for luxury portfolio including Johnnie Walker, Cîroc, Don Julio, and Tanqueray. Selected for Diageo\'s inaugural Futures Leaders Program and deployed to South Africa to lead strategic sales and marketing initiatives. Drove award-winning campaigns and launched groundbreaking mobile application that won Cannes Golden Lion.',
      highlights: [
        'Delivered +7% NSV increase and +2% vodka category share growth across portfolio',
        'Led 2 award-winning 360° campaigns: "Keep Walking South Africa" & "King of Flavour"',
        'Launched Captain Morgan\'s Captains Conquest mobile app (Cannes Golden Lion 2012, The Economist feature 2013)',
        'Drove Captain Morgan Black Spiced Rum innovation delivering +250k incremental cases',
      ],
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="text-gray-600 text-sm uppercase tracking-widest font-medium mb-6">
            Professional Journey
          </p>
          <h2 className="text-6xl md:text-7xl font-serif mb-8" style={{ color: '#c8b99a' }}>
            Selected Experience
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-20" />

        {/* Experience Cards */}
        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div key={index} className="pb-16 border-b border-gray-800 last:border-b-0">
              {/* Company & Role */}
              <div className="mb-6">
                <p className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-3">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-3">
                  {exp.name}
                </h3>
                <p className="text-lg" style={{ color: '#c8b99a' }}>
                  {exp.role}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
                {exp.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-base text-gray-400 flex items-start gap-3">
                    <span className="text-gold-400 font-bold mt-1 flex-shrink-0">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
