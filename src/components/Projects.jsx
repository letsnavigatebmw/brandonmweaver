export default function Projects() {
  const experiences = [
    {
      name: 'Navigate',
      role: 'Co-Founder & Chief Executive Officer',
      description: 'Prospecting intelligence platform designed to modernize prospecting for residential real estate agents. Restructured ownership, stabilized operations, redesigned pricing architecture, and renegotiated core data partnerships to materially improve unit economics. Built preferred partnership with Compass, serving 60k+ agents.',
      highlights: [
        'Reduced data enrichment unit costs by 25% (from ~$2.50 → $1.90 per record) through vendor renegotiation and demand-based pricing optimization',
        'Established strategic partnership with Compass; increased trial participation by +75% and improved trial-to-paid conversion to 90% within three months',
        'Scaled workflows to support 150+ users, 300+ executed campaigns, and 300K+ owner/property records retrieved per month',
      ],
    },
    {
      name: 'Lacure',
      role: 'Chief Commercial Officer',
      description: 'Luxury villa portfolio management platform. Led 65-person global organization across sales, marketing, contracting, and client services managing 1,500+ luxury villas worldwide.',
      highlights: [
        'Drove Field Sales strategy and executed "value-add" programs with key accounts to expand reach and capture incremental share amid accelerating demand',
        'Re-architected supply portfolio and operating workflows to reduce high-impact service failures and improve quality control across secondary and tertiary markets',
        'Led 65-person cross-functional organization across Sales, Contracting, Marketing, and Client Service responsible for building demand and operating global portfolio',
      ],
    },
    {
      name: 'Sonder Hospitality',
      role: 'Area General Manager',
      description: 'Technology-enabled provider of alternative accommodations. Led 40-person team across real estate, marketing, revenue, operations and sales managing portfolio of 5 hotels with 700+ apartment-style and hotel rooms across California markets.',
      highlights: [
        'Built and managed external stakeholder network (consultants, attorneys, lenders, city officials, developers) to execute growth initiatives in highly regulated markets',
        'Negotiated and executed complex multi-million-dollar lease structures (revenue share, master lease, mixed lease) with local, regional, and national development firms',
        'Led 40-person cross-functional team (Real Estate, Marketing, Revenue, Operations, Sales) managing 700+ rooms across multiple California markets',
      ],
    },
    {
      name: 'Bonotel Exclusive Travel',
      role: 'Chief Marketing Officer & Chief Operations Officer',
      description: 'Carlyle-backed $300M luxury hospitality platform. Drove revenue growth from $224M to $285M, operating model redesign, and strategic acquisitions including luxury concierge services business.',
      highlights: [
        'Revamped B2B marketing strategy improving collateral, channel mix, and data-driven alignment; drove +7% YoY room nights and +12% revenue growth (2015-2016)',
        'Re-architected sales organization and rationalized product strategy across new markets, contributing to ~+14% net revenue growth over 3 years',
        'Led acquisition and launch of luxury concierge division ("Beyond by Bonotel"), increasing revenue +33% and gross margin +17% vs. prior year',
      ],
    },
    {
      name: 'Diageo',
      role: 'Regional Marketing Manager & Futures Leaders Program',
      description: 'Global spirits leader managing P&L for luxury portfolio including Johnnie Walker, Don Julio, Tanqueray, and Bulleit. Selected for Diageo\'s inaugural Futures Leaders Program and deployed to South Africa to lead strategic sales and marketing initiatives. Drove award-winning campaigns and launched groundbreaking mobile application that won Cannes Golden Lion.',
      highlights: [
        'Managed P&L for luxury spirits portfolio, delivering +7% NSV growth and +2% category share gain in Vodka category',
        'Led two award-winning 360° campaigns ("Keep Walking South Africa," "King of Flavor"), driving +4% share growth',
        'Developed and launched Diageo\'s first mobile platform ("Captain\'s Conquest") winning Cannes Golden Lion (2012) and The Economist feature (2013)',
        'Led innovation of Captain Morgan Black Spiced Rum, delivering +250K incremental cases to the trademark',
      ],
    },
  ]

  return (
    <section id="projects" className="pt-12 pb-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="text-gray-600 text-sm uppercase tracking-widest font-medium mb-6">
            Professional Journey
          </p>
          <h2 className="text-6xl md:text-7xl font-serif mb-6" style={{ color: '#c8b99a' }}>
            Selected <span className="italic">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A career built on scaling operations, driving revenue growth, and building teams that deliver results.
          </p>
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
