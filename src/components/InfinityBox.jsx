export default function InfinityBox() {
  return (
    <section className="bg-black pt-0 pb-12 md:pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="border-2 border-gold-400 rounded-lg p-4 md:p-6 bg-gray-950 text-center">
          {/* Infinity Symbol */}
          <p className="text-3xl md:text-4xl font-serif mb-2" style={{ color: '#c8b99a' }}>
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
