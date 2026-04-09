export default function Stats() {
  const stats = [
    {
      number: '10+',
      description: 'Brands Launched & Scaled',
    },
    {
      number: '$10M+',
      description: 'Capital Raised Across Ventures',
    },
    {
      number: '20+',
      description: 'Years Across CPH, Hospitality, Real Estate & Finance',
    },
    {
      number: '$750M+',
      description: 'P&L Management',
    },
  ]

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-0 border border-gray-700">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-12 md:p-16 flex flex-col justify-start items-start min-h-[250px] md:min-h-[280px] ${
                index < 2 ? 'border-b border-gray-700' : ''
              } ${index % 2 === 0 ? 'border-r border-gray-700' : ''}`}
              style={{
                backgroundColor: index === 3 ? 'rgba(50, 50, 35, 0.2)' : 'transparent',
              }}
            >
              {/* Stat Number */}
              <p
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-none mb-8"
                style={{ color: '#c8b99a' }}
              >
                {stat.number}
              </p>

              {/* Description */}
              <p className="text-sm md:text-base uppercase tracking-widest font-medium text-gray-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
