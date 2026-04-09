export default function InfinityBox() {
  return (
    <section className="bg-black -mt-6 md:-mt-8 pt-0 pb-20 md:pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="border-4 border-gold-400 rounded-lg p-16 md:p-20 bg-gray-950 text-center">
          {/* Infinity Symbol */}
          <p className="text-6xl md:text-7xl font-serif mb-8" style={{ color: '#c8b99a' }}>
            ∞
          </p>
          
          {/* Text */}
          <p className="text-xl md:text-3xl font-serif leading-relaxed" style={{ color: '#c8b99a' }}>
            Experience Forged Across Industry, A Perspective Built For What's Next…
          </p>
        </div>
      </div>
    </section>
  )
}
