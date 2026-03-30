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
      name: 'Bonotel & Sonder Hospitality',
      role: 'Executive Leadership (CCO)',
      description: 'Carlyle-backed $300M hospitality platform. Drove revenue growth, operating model redesign, and strategic acquisitions. Selected for Diageo Future Leaders Program with international assignment in Cape Town.',
      highlights: [
        'Drove revenue growth and acquisition strategy',
        'Redesigned operating models',
        'Led commercial initiatives across portfolio',
      ],
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-white">
          Selected Experience
        </h2>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b border-gray-800 pb-12 last:border-b-0">
              {/* Company & Role */}
              <div className="mb-6">
                <h3 className="text-4xl font-bold text-white mb-2">
                  {exp.name}
                </h3>
                <p className="text-sm text-gold-400 uppercase tracking-wide font-bold">
                  {exp.role}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-6 max-w-3xl leading-relaxed">
                {exp.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-base text-gray-400 flex items-start gap-3">
                    <span className="text-gold-400 font-bold mt-1">→</span>
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
