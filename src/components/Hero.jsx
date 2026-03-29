export default function Hero() {
  return (
    <section className="hero-container pt-20">
      {/* Image on left with fade */}
      <img 
        src="/headshot.jpg" 
        alt="Brandon Weaver" 
        className="hero-image"
      />
      <div className="hero-image-fade" />

      {/* Content on right */}
      <div className="hero-content space-y-8">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-gray-400">CEO @ Navigate</span>
        </div>

        {/* Headline */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            Scaling<br />
            Commercial<br />
            Engines
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
            Strategic operator connecting revenue, operations, and growth. Former CCO/COO. Carlyle-backed founder building Navigate.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105 text-lg inline-block text-center"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-emerald-600 text-emerald-500 font-bold rounded-lg hover:bg-emerald-600/10 transition-colors text-lg inline-block text-center"
          >
            See Experience
          </a>
        </div>
      </div>
    </section>
  )
}
