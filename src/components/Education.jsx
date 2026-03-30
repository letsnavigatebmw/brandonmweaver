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
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16" style={{ color: '#c8b99a' }}>
          Education
        </h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="border-b border-gray-800 pb-8 last:border-b-0">
              {/* School & Degree */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {edu.school}
                </h3>
                <p className="text-lg text-gold-400 font-bold">
                  {edu.degree}
                </p>
              </div>

              {/* Major & Year */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
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
