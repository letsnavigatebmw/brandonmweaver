export default function InfinityBox() {
  return (
    <section className="bg-black -mt-6 md:-mt-8 pt-0 pb-12 md:pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="border-2 border-gold-400 rounded-lg p-12 md:p-16 bg-gray-950 text-center">
          {/* Infinity Symbol */}
          <p className="text-5xl md:text-6xl font-serif mb-6" style={{ color: '#c8b99a' }}>
            ∞
          </p>
          
          {/* Text */}
          <p className="text-lg md:text-2xl font-serif leading-relaxed" style={{ color: '#c8b99a' }}>
            Experience Forged Across Industry, A Perspective Built For What's Next…
          </p>
        </div>
      </div>
    </section>
  )
}
