export default function Projects() {
  const experiences = [
    {
      name: 'Navigate',
      role: 'CEO & Founder',
      description: 'Real estate prospecting platform. Built from 0 → product-market fit. Managing $2M+ raised, scaling team and operations.',
      highlights: [
        'Built from 0 → product-market fit',
        'Raised $2M+ in funding',
        'Managing team and operations',
      ],
    },
    {
      name: 'Lacure',
      role: 'COO & Co-founder',
      description: 'Luxury skincare commerce. Scaled operations, built supply chain, optimized unit economics from pre-launch to $5M+ ARR.',
      highlights: [
        'Grew from pre-launch to $5M+ ARR',
        'Built operations and fulfillment',
        'Optimized margins and efficiency',
      ],
    },
    {
      name: 'Bonotel',
      role: 'Chief Commercial Officer',
      description: 'Carlyle-backed travel tech startup. Led go-to-market, revenue operations, and strategic partnerships across enterprise segment.',
      highlights: [
        'Grew enterprise segment 3x',
        'Built sales and partnership strategy',
        'Optimized customer acquisition',
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
                <p className="text-sm text-yellow-500 uppercase tracking-wide font-bold">
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
                    <span className="text-yellow-500 font-bold mt-1">→</span>
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
