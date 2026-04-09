export default function InfinityBox() {
  return (
    <section className="bg-black py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="border-2 border-gold-400 rounded-lg p-12 md:p-16 bg-gray-950 text-center">
          {/* Infinity Symbol */}
          <p className="text-6xl md:text-7xl font-serif mb-8" style={{ color: '#c8b99a' }}>
            ∞
          </p>
          
          {/* Text */}
          <p className="text-xl md:text-3xl font-serif leading-relaxed" style={{ color: '#c8b99a' }}>
            Experience forged across industry, a perspective built for what's next…
          </p>
        </div>
      </div>
    </section>
  )
}
