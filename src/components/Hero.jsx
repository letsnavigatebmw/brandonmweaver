import headshotImage from '../assets/brandon-headshot.jpg'

export default function Hero() {
  return (
    <section className="hero-container pt-20">
      {/* Image on left with fade */}
      <img 
        src={headshotImage} 
        alt="Brandon Weaver" 
        className="hero-image"
        width={1600}
        height={870}
        loading="eager"
      />
      <div className="hero-image-fade" />

      {/* Content on right */}
      <div className="hero-content space-y-8">
        {/* Headline */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Experienced Operator,<br />
            Connector & Growth<br />
            Architect
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg">
            Co-Founder & CEO of <a href="https://navigatenow.com" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition-colors font-medium">Navigate</a>, modernizing real estate prospecting with AI-powered intelligence.
          </p>

          {/* Supporting line */}
          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-lg">
            20+ years driving growth, transformation, and disciplined financial performance across consumer brands, hospitality, and technology platforms. Previously led commercial strategy at Diageo, Sonder (Carlyle-backed), and Lacure. Interested in partnerships, advisory roles, and building the future of real estate tech.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 pt-4 w-full sm:w-auto">
          <a
            href="#contact"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gold-400 text-black font-bold rounded-lg hover:bg-gold-300 transition-all transform hover:scale-105 text-base sm:text-lg inline-block text-center min-h-[44px] flex items-center justify-center"
          >
            Let's Talk
          </a>
          <a
            href="#projects"
            className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-gold-400 text-gold-400 font-bold rounded-lg hover:bg-gold-400/10 transition-colors text-base sm:text-lg inline-block text-center min-h-[44px] flex items-center justify-center"
          >
            See What I've Built
          </a>
        </div>
      </div>
    </section>
  )
}
