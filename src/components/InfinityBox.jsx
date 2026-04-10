export default function InfinityBox() {
  return (
    <section className="bg-black -mt-6 md:-mt-8 pt-0 pb-12 md:pb-16 px-6">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="border-2 border-gold-400 rounded-lg p-8 md:p-12 bg-gray-950 text-center max-w-2xl">
          {/* Infinity Symbol */}
          <p className="text-4xl md:text-5xl font-serif mb-4" style={{ color: '#c8b99a' }}>
            ∞
          </p>
          
          {/* Text */}
          <p className="text-base md:text-lg font-serif leading-relaxed" style={{ color: '#c8b99a' }}>
            Experience Forged Across Industry, A Perspective Built For What's Next…
          </p>
        </div>
      </div>
    </section>
  )
}
