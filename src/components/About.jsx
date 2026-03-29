export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-gray-900">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left - Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
              I'm a founder and builder based in Santa Monica, obsessed with solving real problems for real professionals.
            </p>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
              After seeing how outdated technology dominated real estate, I decided to build something better. Navigate combines intelligent prospecting tools with modern design to help agents work smarter.
            </p>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
              I care deeply about product design, customer success, and building companies that actually matter.
            </p>
          </div>

          {/* Right - Details */}
          <div className="space-y-8">
            {/* Company Card */}
            <div className="p-8 border-2 border-gray-200 rounded-lg hover:border-yellow-400 transition-colors">
              <h3 className="font-sans font-semibold text-gray-600 text-sm uppercase tracking-widest mb-2">
                Navigate
              </h3>
              <p className="text-gray-900 font-serif text-xl mb-4 font-bold">
                Real Estate Prospecting Platform
              </p>
              <p className="text-gray-600 font-sans text-sm mb-3">
                Founded 2024 • Santa Monica, CA
              </p>
              <p className="text-gray-700 font-sans">
                Intelligent tools for finding and connecting with real estate prospects.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-yellow-600">15</p>
                <p className="text-sm text-gray-600 font-sans mt-2">years experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-yellow-600">SFO</p>
                <p className="text-sm text-gray-600 font-sans mt-2">Santa Monica</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-yellow-600">∞</p>
                <p className="text-sm text-gray-600 font-sans mt-2">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
