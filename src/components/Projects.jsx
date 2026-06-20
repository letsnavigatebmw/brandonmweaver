import { Linkedin, Instagram, Youtube } from 'lucide-react'

export default function Projects() {
  const experiences = [
    {
      name: 'Navigate',
      location: 'Los Angeles, CA',
      logo: '/navigate-logo.png',
      url: 'https://letsnavigatenow.com/',
      linkedin: 'https://www.linkedin.com/company/navigatenow/',
      instagram: 'https://www.instagram.com/prospectwithnavigate?igsh=MXZkdnJmZmhocGh1ag%3D%3D&utm_source=qr',
      youtube: 'https://www.youtube.com/@ProspectwithNavigate',
      dates: 'August 2024 – March 2026',
      role: 'Co-Founder & Chief Executive Officer',
      description: '',
      highlights: [
        'Acquired and assumed control of Navigate, investing personal capital to restructure ownership, stabilize operations, and reposition the company for scalable growth.',
        'Defined company vision and led end-to-end product strategy for a real estate intelligence and automated outreach platform integrating owner, property, and marketing data; scaled workflows to support 150+ users, 300+ executed campaigns, and 300K+ owner/property records retrieved per month.',
        'Owned full P&L, pricing strategy, and financial modeling; reduced data enrichment unit costs by 25% (from ~$2.50 → $1.90 per record) through vendor renegotiation and demand-based pricing optimization.',
        'Established strategic partnership with Compass, embedding Navigate into Learning & Development programming and lead generation infrastructure; built cross-functional product and RevOps systems that increased trial participation by +75% and improved trial-to-paid conversion to 90% within three months.',
      ],
    },
    {
      name: 'Voyage Real Estate',
      location: 'Compass | LA, Miami, NYC',
      logo: '/voyage-logo.png',
      url: 'https://voyagerealestate.com/',
      dates: 'November 2023 – August 2024',
      role: 'Consultant (via Aperture Hospitality)',
      description: '',
      highlights: [
        'Worked with leadership team to design and execute a phased growth roadmap to support market expansion to Miami and New York markets projected to drive 20–30% agent base growth over 12–18 months.',
        'Designed and operationalized agent recruitment strategy, contributing to a 2–3x increase in qualified agent pipeline and improving conversion efficiency by ~25% through clearer brand positioning and lead generation capability (Navigate)',
        'Partnered with leadership to evolve Voyage into a more scalable multi-market platform, supporting expansion readiness, accelerating recruitment timelines, and improved brand positioning.',
        'Developed adjacent product and service strategy (partnerships, ancillary offerings), unlocking potential to increase agent retention by +10–15% and expand revenue per agent by +15–25%.',
        'Introduced scalable infrastructure and workflows that improved transaction velocity, contributing to an estimated 10–20% increase in deal throughput per agent.',
        'Refined positioning and go-to-market strategy, strengthening differentiation within the Compass ecosystem and supporting higher-quality inbound interest from experienced agents.',
      ],
    },
    {
      name: 'Lacure',
      logo: '/lacure-logo.png',
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
      logo: '/sonder-logo.png',
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
      logo: '/bonotel-logo.png',
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
      logo: '/diageo-logo.png',
      url: 'https://www.diageo.com',
      dates: '2011 – 2014',
      role: 'Regional Marketing Director',
      program: 'Future Leaders of Diageo Program Participant',
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
    <section id="projects" className="pt-12 pb-12 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-wide mb-8" style={{ color: '#000' }}>
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="w-full h-px bg-gray-400 mb-8" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {/* Navigate Employment Card */}
          {experiences[0] && (
            <>
              {/* First Experience (Navigate) */}
              <div key={0} className="pb-8 border-b border-gray-800">
                {/* Company & Role */}
                <div className="mb-4">
                  <p className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-3">
                    01
                  </p>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-serif text-white mb-1">
                        {experiences[0].name}
                        {experiences[0].location && <span className="text-2xl md:text-3xl"> | {experiences[0].location}</span>}
                      </h3>
                    </div>
                    {experiences[0].dates && (
                      <p className="text-sm text-gray-500 whitespace-nowrap ml-4">
                        {experiences[0].dates}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2 mb-4">
                    <p className="text-lg italic text-gray-300">
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
                        {experiences[0].logo && (
                          <>
                            <span className="text-gray-600 hidden md:inline">|</span>
                            <img 
                              src={experiences[0].logo} 
                              alt={experiences[0].name}
                              className="h-8 md:h-10 w-auto px-3 py-2 rounded bg-black"
                              style={{
                                marginLeft: '-0.65rem',
                              }}
                            />
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>



                {/* Highlights */}
                <ul className="space-y-3 mb-8">
                  {experiences[0].highlights.map((highlight, i) => (
                    <li key={i} className="text-base text-gray-400 flex items-start gap-3">
                      <span className="text-gold-400 font-bold mt-1 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Navigate Platform Card */}
                <div className="bg-transparent border border-white rounded-2xl p-8 space-y-4 mb-8">
                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-white">Discover </span>
                    <span style={{ color: '#a78bfa' }}>Navigate</span>
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Navigate is a property intelligence platform designed to create opportunity at the intersection of people, property, and possibility. The platform combines owner, property, and marketing intelligence to help you find qualified prospects and reach them at scale.
                  </p>

                  {/* CTAs */}
                  <div className="pt-4 flex flex-col md:flex-row gap-4">
                    <a
                      href="https://www.letsnavigatenow.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 font-bold rounded-lg transition-colors"
                      style={{ backgroundColor: '#a78bfa', color: '#000000' }}
                    >
                      Ready to Navigate
                    </a>
                    <a
                      href="https://letsnavigatenow.com/pg/invest"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 font-bold rounded-lg transition-colors border border-white text-white hover:bg-white hover:text-black"
                    >
                      Learn More About our Seed Round
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Remaining Experience Cards */}
          {experiences.map((exp, index) => (
            index === 0 ? null : (
            <div key={index} className="pb-8 border-b border-gray-800 last:border-b-0">
              {/* Company & Role */}
              <div className="mb-4">
                <p className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-3">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-serif text-white mb-1">
                      {exp.name}
                      {exp.location && <span className="text-2xl md:text-3xl"> | {exp.location}</span>}
                    </h3>
                  </div>
                  {exp.dates && (
                    <p className="text-sm text-gray-500 whitespace-nowrap ml-4">
                      {exp.dates}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2 mb-4">
                <p className="text-lg italic text-gray-300">
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
                    {exp.logo && (
                      <>
                        <span className="text-gray-600 hidden md:inline">|</span>
                        <img 
                          src={exp.logo} 
                          alt={exp.name}
                          className="h-8 md:h-10 w-auto px-3 py-2 rounded bg-black"
                          style={{
                            marginLeft: '-0.65rem',
                            ...(['Sonder Hospitality', 'Bonotel Exclusive Travel'].includes(exp.name) ? { filter: 'brightness(0.6)' } : {})
                          }}
                        />
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Highlights */}
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-base text-gray-400 flex items-start gap-3">
                    <span className="text-gray-400 font-bold mt-1 flex-shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            )
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="pt-12 mt-12 border-t border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-8 text-white">
            What Clients Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 - Voyage */}
            <div className="border border-gray-700 rounded-lg p-8 bg-gray-900">
              <p className="text-gray-300 italic mb-8 text-sm leading-relaxed">
                "Brandon has a unique ability to connect strategy with execution. During our growth initiatives, he consistently identified opportunities others missed, built alignment across teams, and helped us accelerate expansion while maintaining a strong focus on agent success. His combination of commercial acumen, relationship-building, and operational discipline makes him an invaluable partner."
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-white font-semibold text-sm">Ari Afshar</p>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Founder & CEO, Voyage Real Estate</p>
              </div>
            </div>

            {/* Testimonial 2 - Foto Comercio */}
            <div className="border border-gray-700 rounded-lg p-8 bg-gray-900">
              <p className="text-gray-300 italic mb-8 text-sm leading-relaxed">
                "Working with Brandon felt like having a true strategic partner rather than an outside advisor. He quickly understood our business, challenged our assumptions in the right ways, and helped translate complex growth objectives into practical, measurable actions. His ability to bridge data, marketing, and business development is exceptional."
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-white font-semibold text-sm">Michael Silver</p>
                <p className="text-gray-500 text-xs uppercase tracking-wider">President, Foto Comercio</p>
              </div>
            </div>

            {/* Testimonial 3 - Beverly Spirits */}
            <div className="border border-gray-700 rounded-lg p-8 bg-gray-900">
              <p className="text-gray-300 italic mb-8 text-sm leading-relaxed">
                "Brandon brings a rare blend of luxury brand expertise, commercial leadership, and authentic relationship-building. He understands how to create meaningful customer connection while never losing sight of revenue and operational performance. His strategic thinking and professionalism consistently elevate every project he touches."
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-white font-semibold text-sm">Andy Borenzweig</p>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Founder & CEO, Beverly Spirits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
