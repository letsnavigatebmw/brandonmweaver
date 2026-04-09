export default function PodcastShort() {
  const youtubeUrl = 'https://youtube.com/shorts/MvYFAvVDfZ8'

  return (
    <section className="bg-black py-20 md:py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block border-2 border-gold-400 rounded-lg p-8 md:p-12 bg-gray-950 hover:bg-gray-900 transition-colors"
        >
          <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-6">
            Podcast Short
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            <span style={{ color: '#c8b99a' }}>It's Not Happening to You, It's Happening for You</span>
          </h3>
          <p className="text-gray-400 text-base">
            Riverside
          </p>
          <p className="text-gold-400 font-bold uppercase tracking-widest text-xs mt-6">
            Watch on YouTube →
          </p>
        </a>
      </div>
    </section>
  )
}
