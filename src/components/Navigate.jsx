export default function Navigate() {
  return (
    <section id="navigate" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900/50 border border-yellow-500/30 rounded-2xl p-12 space-y-6">
          {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Discover </span>
              <span className="text-yellow-400">Navigate</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed">
            Navigate is a property intelligence platform designed to create opportunity at the intersection of people, property, and possibility. The platform combines owner, property, and marketing intelligence to help you find qualified prospects and reach them at scale.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="https://navigate.mysites.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
