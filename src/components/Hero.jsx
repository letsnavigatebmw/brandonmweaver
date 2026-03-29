export default function Hero() {
  return (
    <section className="hero-background relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
      {/* Trust badge */}
      <div className="mb-12 inline-flex items-center gap-2 bg-gray-900/50 backdrop-blur px-4 py-2 rounded-full border border-gray-700">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <p className="text-sm text-gray-300">CEO @ Navigate</p>
      </div>

      {/* Headline */}
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
          Scaling<br />
          Commercial<br />
          Engines
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Strategic operator connecting revenue, operations, and growth. Former CCO/COO. Carlyle-backed founder.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#contact"
            className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition-all transform hover:scale-105 text-lg"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-colors text-lg"
          >
            See Experience
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
