export default function ApertureHospitality() {
  return (
    <section className="py-12 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-gray-600 text-sm uppercase tracking-widest font-medium mb-6">
            Advisory & Consulting
          </p>
          <h2 className="text-6xl md:text-7xl font-serif mb-6" style={{ color: '#c8b99a' }}>
            Aperture <span className="italic">Hospitality</span>
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-8" />

        {/* Content */}
        <div className="w-full">
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I'm <span className="text-white font-bold">Founder & CEO</span> of Aperture Hospitality, a boutique hospitality consulting practice that helps companies operating in the hospitality sector with solutions across marketing, sales, and operations. Formed in 2021 to help brands develop strategies that unlock value, spot new opportunity, or reposition for transformative growth. Aperture has advised brands across real estate, luxury travel, and Wine & Spirits.
          </p>

          {/* CTA */}
          <a
            href="https://www.aperturehospitality.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gold-400 font-bold uppercase tracking-wide text-sm hover:text-gold-300 transition-colors"
          >
            How Aperture Can Help You →
          </a>
        </div>
      </div>
    </section>
  )
}
