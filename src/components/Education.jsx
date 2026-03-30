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
          <h2 className="text-6xl md:text-7xl font-serif mb-8" style={{ color: '#c8b99a' }}>
            Education
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-20" />

        {/* Education Cards */}
        <div className="space-y-16">
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
      </div>
    </section>
  )
}
