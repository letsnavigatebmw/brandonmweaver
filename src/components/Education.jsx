export default function Education() {
  const education = [
    {
      school: 'Kellogg School of Management, Northwestern University',
      degree: 'Master of Business Administration (MBA)',
      major: 'Corporate Finance',
      year: '2008 - 2011',
    },
    {
      school: 'Harvard University Kennedy School of Government',
      degree: 'Master of Public Administration (MPA)',
      major: 'Public Administration',
      year: '2009 - 2011',
    },
    {
      school: 'University of Southern California (USC)',
      degree: 'Bachelor of Arts',
      major: 'Communication Studies (Annenberg School) & Business Administration (Marshall School)',
      year: '1998 - 2002',
    },
  ]

  return (
    <section id="education" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="text-gray-600 text-sm uppercase tracking-widest font-medium mb-6">
            Academic Background
          </p>
          <h2 className="text-6xl md:text-7xl font-serif mb-6" style={{ color: '#c8b99a' }}>
            Education, Interests & <span className="italic">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Advanced degrees in business, public administration, and communications from world-class institutions.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-20" />

        {/* Education Cards */}
        <div className="space-y-16 mb-20">
          {education.map((edu, index) => (
            <div key={index} className="pb-16 border-b border-gray-800 last:border-b-0">
              {/* Number */}
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-3">
                {String(index + 1).padStart(2, '0')}
              </p>

              {/* School */}
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-3">
                {edu.school}
              </h3>

              {/* Degree */}
              <p className="text-lg mb-6" style={{ color: '#c8b99a' }}>
                {edu.degree}
              </p>

              {/* Major & Year */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                <p className="text-base text-gray-400">
                  {edu.major}
                </p>
                <p className="text-sm text-gray-500">
                  {edu.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-16" />

        {/* Interests & Achievements */}
        <div className="space-y-8">
          {/* Interests */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Interests</h3>
            <p className="text-base text-gray-400 leading-relaxed">
              Football (<em>American & European</em>) | Travel | Art | Fashion | Architecture & Design | Leadership & Mentoring
            </p>
          </div>

          {/* Advisory */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Advisory</h3>
            <p className="text-base text-gray-400 leading-relaxed">
              Dowling St. (Board Member & Strategic Advisor, 2016–Present) | The Runda Lab (Advisor, 2023–Present) | WES Brands (Former Advisor, 2021–2023)
            </p>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Awards</h3>
            <p className="text-base text-gray-400 leading-relaxed">
              Cannes Golden Lion (2012) — Best Mobile Application ("Captain's Conquest") | Diageo Future Leaders Program (2013)
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 my-20" />

      </div>

      {/* Lasting Message */}
      <div className="border-t border-gray-800 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h3 className="text-6xl md:text-7xl font-serif mb-6" style={{ color: '#c8b99a' }}>
              A Leader with A Global <span className="italic">Perspective</span>
            </h3>
            <p className="text-gray-600 text-sm uppercase tracking-widest font-medium">
              Connector & Builder | Modern Leader | Problem Solver
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-base text-gray-400 leading-relaxed">
              My professional and personal story has been largely shaped by the power of connectivity. The inertia that comes from human connection allows me to be as comfortable in a boardroom as I am sharing life lessons with a stranger. My work is guided by a deep belief in our collective potential. Modern leadership is about instilling in others the belief that they have the ability to transform their reality.
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              As a citizen of the world, I have learned to always be curious, to invest in relationships, and to exercise empathy and patience for things you don't quite understand. While my journey is far from linear, working across continents and companies, serving as a custodian for some of the world's most iconic luxury brands, and launching a software platform to address an archaic and broken process, it has taught me that I am a natural problem solver, inspired by a relentless pursuit of growth, a gift for bringing people together, and a rare authenticity that stands out in a world of AI and artifice. For me, it's not just about building businesses. It's about building bridges, one real conversation at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
