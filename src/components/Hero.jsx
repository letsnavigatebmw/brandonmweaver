export default function Hero() {
  return (
    <section className="hero-container pt-20">
      {/* Image on left with fade */}
      <img 
        src="/brandon-headshot.jpg" 
        alt="Brandon Weaver" 
        className="hero-image"
      />
      <div className="hero-image-fade" />

      {/* Content on right */}
      <div className="hero-content space-y-8">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
          <span className="text-gray-400">Co-Founder & CEO @ Navigate</span>
        </div>

        {/* Headline */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            Founder, Executive,<br />
            and Growth<br />
            Architect
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
            20+ years driving growth, transformation, and disciplined financial performance across consumer, hospitality, and technology. Co-Founder and CEO of Navigate, a prospecting intelligence platform modernizing residential real estate.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-gold-400 text-black font-bold rounded-lg hover:bg-gold-300 transition-all transform hover:scale-105 text-lg inline-block text-center"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-gold-400 text-gold-400 font-bold rounded-lg hover:bg-gold-400/10 transition-colors text-lg inline-block text-center"
          >
            See Experience
          </a>
        </div>
      </div>
    </section>
  )
}
