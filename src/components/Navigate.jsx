export default function Navigate() {
  return (
    <section id="navigate" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="ml-auto max-w-3xl bg-gray-900/50 border border-purple-500/30 rounded-2xl p-12 space-y-6">
          {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Discover </span>
              <span className="text-purple-400">Navigate</span>
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
              className="inline-block px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
