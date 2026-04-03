export default function RightNow() {
  const focuses = [
    {
      title: 'Modernizing Real Estate Prospecting',
      description: 'Building Navigate into the default intelligence layer for residential real estate agents. Focus: customer acquisition, unit economics, and AI-powered insights that actually move deals forward.',
    },
    {
      title: 'Rethinking Commercial Strategy',
      description: 'Exploring how distribution channels, pricing leverage, and authorization dynamics shape competitive advantage. Writing about what actually moves the needle in B2B businesses.',
    },
    {
      title: 'Building Operator Playbooks',
      description: 'Documenting how to scale operations, align cross-functional teams, and execute at pace. Creating frameworks that founders and operators can actually use.',
    },
  ]

  return (
    <section id="right-now" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="text-gray-600 text-sm uppercase tracking-widest font-medium mb-6">
            Current Focus
          </p>
          <h2 className="text-6xl md:text-7xl font-serif mb-6" style={{ color: '#c8b99a' }}>
            Right <span className="italic">Now</span>
          </h2>
          <p className="text-gray-400 text-lg">
            What I'm actively working on and learning. Not resting on past successes—building what's next.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-16" />

        {/* Focus Areas */}
        <div className="grid md:grid-cols-3 gap-12">
          {focuses.map((focus, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                {focus.title}
              </h3>
              <p className="text-base text-gray-400 leading-relaxed">
                {focus.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-16 border-t border-gray-800 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <p className="text-gray-600 italic text-base max-w-lg">
            If any of this resonates—or if you're working on something similar—let's talk.
          </p>
          <a
            href="#contact"
            className="text-gold-400 font-bold uppercase tracking-wide text-sm hover:text-gold-300 transition-colors"
          >
            Start a conversation →
          </a>
        </div>
      </div>
    </section>
  )
}
