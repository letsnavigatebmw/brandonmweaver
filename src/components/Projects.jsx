export default function Projects() {
  const experiences = [
    {
      name: 'Navigate',
      url: 'https://letsnavigatenow.com/',
      dates: 'January 2024 – Present',
      role: 'Co-Founder & Chief Executive Officer',
      description: 'Prospecting intelligence platform designed to modernize prospecting for residential real estate agents. Restructured ownership, stabilized operations, redesigned pricing architecture, and renegotiated core data partnerships to materially improve unit economics. Navigate has partnered with recognized brokerages like Compass, The Agency, Engel & Volkers and Keller Williams.',
      highlights: [
        'Reduced data enrichment unit costs by 25% (from ~$2.50 → $1.90 per record) through vendor renegotiation and demand-based pricing optimization',
        'Established strategic partnership with Compass; increased trial participation by +75% and improved trial-to-paid conversion to 90% within three months',
        'Scaled workflows to support 150+ users, 300+ executed campaigns, and 300K+ owner/property records retrieved per month',
      ],
    },
    {
      name: 'Lacure',
      url: 'https://www.lacurevillas.com/',
      dates: 'October 2021 – November 2023',
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
      url: 'https://www.sonder.com/',
      dates: 'June 2019 – September 2021',
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
      url: 'https://www.bonotel.com/',
      dates: '2014 – 2017',
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
      url: 'https://www.diageo.com/en',
      dates: '2011 – 2014',
      role: 'Futures Leaders Program Participant',
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
          <p className="text-gray-400 text-lg">
            A career built on scaling operations, driving revenue growth, and building teams that deliver results.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-20" />

        {/* Bio Section */}
        <div className="mb-20 pb-20 border-b border-gray-800">
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
Brandon Weaver grew up in Los Angeles, educated at one of the city's most selective private schools, surrounded by the children of people who had already made it. The expectation in his house was clear: medicine or education. Safe, respected, durable.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
He chose neither.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
Instead, he followed a thread. It took him from USC's Annenberg School to Harvard's Kennedy School of Government in Cambridge, to Northwestern's Kellogg School of Management. Three institutions. Three distinct worldviews. One persistent question underneath all of them: how do you build something that actually matters?
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
That question got sharper on the ground. Living and working across the UK, South Africa, New York, Boston, Miami, Dallas, and Los Angeles taught him something no classroom could: that commerce and community are not opposites. They're in constant negotiation. The best builders are fluent in both.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
From leading Diageo's luxury portfolio vision across Africa to scaling and eventually selling a PE-backed hospitality platform, Brandon built a career at the intersection of connectivity, creativity, and opportunity. He didn't inherit a playbook. He wrote one.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
That same instinct brought him to real estate technology. Navigate wasn't a pivot. It was the logical conclusion of two decades spent watching an industry resist modernisation until someone forces the issue.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
But the thread running through all of it isn't the résumé. It's the relationships. Brandon moves through rooms differently, not as the loudest voice, but as the most connected one. He builds relationship capital the way others build financial capital: deliberately, generously, and with a long time horizon. The "plug" who knows someone for everything, and shares that access freely.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
In a world increasingly mediated by algorithms, Brandon's conviction is simple. Success moves at the speed of connectivity.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-20">
          {/* Navigate Employment Card */}
          {experiences[0] && (
            <>
              {/* First Experience (Navigate) */}
              <div key={0} className="pb-16 border-b border-gray-800">
                {/* Company & Role */}
                <div className="mb-6">
                  <p className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-3">
                    01
                  </p>
                  <h3 className="text-4xl md:text-5xl font-serif text-white mb-3">
                    {experiences[0].name}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2 mb-2">
                    <p className="text-lg" style={{ color: '#c8b99a' }}>
                      {experiences[0].role}
                    </p>
                    {experiences[0].url && (
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600 hidden md:inline">|</span>
                        <a
                          href={experiences[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gold-400 hover:text-gold-300 transition-colors font-medium underline"
                        >
                          {experiences[0].url.replace('https://', '').replace('http://', '').replace(/\/$/, '')}
                        </a>
                      </div>
                    )}
                  </div>
                  {experiences[0].dates && (
                    <p className="text-sm text-gray-500 mb-4">
                      {experiences[0].dates}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {experiences[0].description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3 mb-12">
                  {experiences[0].highlights.map((highlight, i) => (
                    <li key={i} className="text-base text-gray-400 flex items-start gap-3">
                      <span className="text-gold-400 font-bold mt-1 flex-shrink-0">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Navigate Platform Card */}
                <div className="bg-gray-900/50 border border-purple-500/30 rounded-2xl p-12 space-y-6 mb-12">
                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-white">Discover </span>
                    <span style={{ color: '#a78bfa' }}>Navigate</span>
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Navigate is a property intelligence platform designed to create opportunity at the intersection of people, property, and possibility. The platform combines owner, property, and marketing intelligence to help you find qualified prospects and reach them at scale.
                  </p>

                  {/* CTA */}
                  <div className="pt-4">
                    <a
                      href="https://www.letsnavigatenow.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 font-bold rounded-lg transition-colors"
                      style={{ backgroundColor: '#a78bfa', color: '#000000' }}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Remaining Experience Cards */}
          {experiences.map((exp, index) => (
            index === 0 ? null : (
            <div key={index} className="pb-16 border-b border-gray-800 last:border-b-0">
              {/* Company & Role */}
              <div className="mb-6">
                <p className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-3">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-3">
                  {exp.name}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2 mb-2">
                  <p className="text-lg" style={{ color: '#c8b99a' }}>
                    {exp.role}
                  </p>
                  {exp.url && (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 hidden md:inline">|</span>
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gold-400 hover:text-gold-300 transition-colors font-medium underline"
                      >
                        {exp.url.replace('https://', '').replace('http://', '').replace(/\/$/, '')}
                      </a>
                    </div>
                  )}
                </div>
                {exp.dates && (
                  <p className="text-sm text-gray-500 mb-4">
                    {exp.dates}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
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
            )
          ))}
        </div>
      </div>
    </section>
  )
}
