export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-3xl w-full">
        {/* Subtitle */}
        <p className="text-sm font-sans font-medium text-gray-600 mb-6 tracking-widest">
          FOUNDER AT NAVIGATE
        </p>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-serif font-bold mb-8 text-gray-900 leading-tight">
          Building the future of real estate prospecting
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-12 max-w-xl leading-relaxed font-sans">
          Modern tools for modern agents. Navigate helps real estate professionals find, connect with, and close more deals using intelligent automation and smart workflows.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-gray-900 text-white font-sans font-medium rounded-lg hover:bg-yellow-600 transition-colors text-center"
          >
            See Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-sans font-medium rounded-lg hover:bg-gray-50 transition-colors text-center"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
