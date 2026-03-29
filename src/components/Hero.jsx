export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <div className="space-y-8">
          {/* Headline */}
          <div>
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-black leading-tight mb-6">
              Brandon Weaver
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif font-normal text-gray-800">
              Scaling Commercial Engines. Connecting What Others Miss.
            </h2>
          </div>

          {/* Subheadline */}
          <p className="text-lg text-gray-700 font-sans max-w-lg">
            CEO @ Navigate | Former CCO / COO | Carlyle-backed operator
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-black text-white font-sans font-medium rounded hover:bg-gray-900 transition-colors"
            >
              Contact
            </a>
            <a
              href="https://linkedin.com/in/brandonweaver"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-black text-black font-sans font-medium rounded hover:bg-black hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right - Headshot placeholder */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-full aspect-square bg-gray-200 rounded flex items-center justify-center text-gray-400 font-sans">
            <p className="text-center">
              Headshot here<br />
              <span className="text-sm">(Upload your image)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
