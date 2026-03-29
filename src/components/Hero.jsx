import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl w-full text-center animate-fadeIn">
        {/* Subtitle */}
        <p className="text-blue-400 font-medium mb-6 tracking-wide">FOUNDER & BUILDER</p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Building the Future of
          <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Real Estate Prospecting
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Founder at Navigate, creating modern tools to help real estate agents find, connect with, and close more deals. Santa Monica-based startup building for the next generation of sales.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            See My Work
            <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-slate-400"
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
      </div>
    </section>
  )
}
