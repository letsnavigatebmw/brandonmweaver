export default function PodcastShort() {
  const shorts = [
    {
      title: "It's Not Happening to You, It's Happening for You",
      url: 'https://youtube.com/shorts/MvYFAvVDfZ8',
    },
    {
      title: "Moving Prospects from Indifference to Indebted",
      url: 'https://youtube.com/shorts/DvXgIrExZkA',
    },
    {
      title: "The World Doesn't Reward Talent...",
      url: 'https://youtube.com/shorts/S7OGIjX4rLc',
    },
  ]

  return (
    <section className="bg-black py-12 md:py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Podcast Header Section */}
        <div className="mb-16">
          <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-4">
            Podcast
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            <span style={{ color: '#c8b99a' }}>AI, Data, and the Human Touch with Brandon Weaver</span>
          </h2>
          <p className="text-gray-400 text-base">
            YouTube
          </p>
        </div>

        {/* Grid of Shorts */}
        <div className="grid md:grid-cols-3 gap-6">
          {shorts.map((short, index) => (
            <a
              key={index}
              href={short.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-2 border-gold-400 rounded-lg p-6 md:p-8 bg-gray-950 hover:bg-gray-900 transition-colors"
            >
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {short.title}
              </p>
              <p className="text-gold-400 font-bold uppercase tracking-widest text-xs">
                Watch →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
