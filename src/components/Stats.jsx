export default function Stats() {
  const stats = [
    {
      number: '8+',
      description: 'B2C & B2B Brands Launched & Scaled',
    },
    {
      number: '$10M+',
      description: 'Capital Raised Across Ventures',
    },
    {
      number: '20+',
      description: 'Years Working Across FMCG, Hospitality, Real Estate, Finance and Technology',
    },
    {
      number: '$750M+',
      description: 'P&L Management',
    },
  ]

  return (
    <section className="bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-0 border-2 border-gold-400">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 flex flex-col justify-start items-start min-h-[140px] md:min-h-[160px] ${
                index < 2 ? 'border-b border-gold-400' : ''
              } ${index % 2 === 0 ? 'border-r border-gold-400' : ''}`}
              style={{
                backgroundColor: index === 3 ? 'rgba(50, 50, 35, 0.2)' : 'transparent',
              }}
            >
              {/* Stat Number */}
              <p
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-none mb-6"
                style={{ color: '#c8b99a' }}
              >
                {stat.number}
              </p>

              {/* Description */}
              <p className="text-xs md:text-sm uppercase tracking-widest font-medium text-gray-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
